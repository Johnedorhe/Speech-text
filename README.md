<<<<<<< HEAD
# Speech to Text App

A simple React app that converts speech to text using your microphone. Features include saving, discarding, and deleting notes, as well as a light/dark mode toggle.

## Features

- Start/stop/reset speech recognition
- Save or discard transcribed notes
- View and delete saved notes
- Light and dark mode toggle

## Setup

1. Clone the repository or copy the folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Click **Start** to begin speech recognition.
- Click **Stop** to end recognition.
- Click **Reset** to clear the transcript.
- Save or discard notes as needed.
- Toggle between light and dark mode using the button at the top right.

## Requirements

- Modern browser with microphone access
- Node.js and npm

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
=======
# Speech-to-text-app
This is a very simple and easy to use app that allows the user create notes using their voice
>>>>>>> 5b55662f0027fcf31a59b9495f14e7f1f6dd9205
