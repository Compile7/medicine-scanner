import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaCamera, FaVolumeUp, FaCopy } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSpeechRecognition } from 'react-speech-recognition';
import Webcam from 'react-webcam';

import medicine_img from'./medicine.webp';
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
      <div className="content-container">
        <div className="image-container">
          <img src={medicine_img} alt="Medicine Packet" />
        </div>
        <div className="information-section">
        <div className="section-header">
            <IconContext.Provider value={{ className: 'icon' }}>
              <FaVolumeUp />
              <FaCopy />
            </IconContext.Provider>
            <button className="language-switcher">Hindi/English</button>
          </div>
        <div className="information">
            <p>Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
    
            Information goes here...
            Information goes here...
            Information goes here...
            Information goes here...
            </p>
          </div>
        </div>
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
