import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';
import { useSpeechRecognition } from 'react-speech-recognition';
import Webcam from 'react-webcam';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [cameraMode, setCameraMode] = useState(false);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleVoiceRecognition = () => {
    resetTranscript();
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleCameraMode = () => {
    setCameraMode(!cameraMode);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Search:', textInput);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" value={textInput} onChange={handleTextChange} placeholder="Search..." />
        <FaMicrophone className="icon" onClick={handleVoiceRecognition} />
        <FaCamera className="icon" onClick={handleCameraMode} />
        <FaSearch className="icon" onClick={handleSearch} />
      </div>
      {cameraMode && (
        <div className="camera-container">
          <Webcam />
        </div>
      )}
    </div>
  );
};

export default App;
