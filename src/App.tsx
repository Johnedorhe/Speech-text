import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

function App() {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition()

    if(!browserSupportsSpeechRecognition) {
      return(
        <p>Your browser does not support this feature!</p>
      )
    }



  return (
    <div>
      <p>Microphone: {listening ? 'ON' : 'OFF'} </p>    

      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      <p>{transcript}</p>
    </div>
  )
}

export default App
