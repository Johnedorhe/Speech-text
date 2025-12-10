import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  React.useEffect(() => {
    setCurrentNote(transcript);
  }, [transcript]);

  const handleSave = () => {
    if (currentNote.trim()) {
      setNotes([currentNote, ...notes]);
      resetTranscript();
    }
  };

  const handleDiscard = () => {
    resetTranscript();
  };

  const handleDelete = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support this feature!</p>;
  }

  return (
    <div
      className={
        `${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-300 text-black'} min-h-screen text-center transition-colors duration-300`
      }
    >
      <div className='flex justify-end p-4'>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`px-4 py-2 rounded font-semibold border ${darkMode ? 'bg-white text-black border-gray-700' : 'bg-gray-900 text-white border-blue-400'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <p className='text-2xl font-semibold mb-3.5'>SPEECH TO TEXT APP</p>
      <p className='m-2'>Microphone: {listening ? 'ON' : 'OFF'}</p>

      <div className='flex gap-2.5 justify-center'>
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-blue-400 text-white'} p-1 font-semibold rounded`} onClick={SpeechRecognition.startListening}>Start</button>
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-blue-400 text-white'} p-1 font-semibold rounded`} onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-blue-400 text-white'} p-1 font-semibold rounded`} onClick={resetTranscript}>Reset</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <textarea
          value={currentNote}
          readOnly
          rows={4}
          style={{ width: '70%', resize: 'none', background: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000', border: '1px solid', borderColor: darkMode ? '#555' : '#ccc' }}
        />
        {currentNote.trim() && (
          <div style={{ marginTop: 10 }}>
            <button className={`${darkMode ? 'bg-white text-black' : 'bg-blue-400 text-white'} p-1 font-semibold rounded`} onClick={handleSave} style={{ marginRight: 8 }}>Save</button>
            <button className={`${darkMode ? 'bg-white text-black' : 'bg-blue-400 text-white'} p-1 font-semibold rounded`} onClick={handleDiscard}>Discard</button>
          </div>
        )}
      </div>

      <h3>Saved Notes</h3>
      {notes.length === 0 ? (
        <p>No notes saved yet.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {notes.map((note, idx) => (
            <li key={idx} style={{ marginBottom: 10, border: '1px solid', borderColor: darkMode ? '#555' : '#ccc', padding: 10, borderRadius: 4, background: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000' }}>
              <div style={{ marginBottom: 6 }}>{note}</div>
              <button onClick={() => handleDelete(idx)} style={{ color: darkMode ? 'red' : 'red', background: 'transparent', border: 'none', fontWeight: 'bold' }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;