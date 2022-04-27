import React from 'react';
import phototimez from "./assets/photo-timez.png";
import allrecipes from "./assets/all-recipes.png";
import colorado1 from "./assets/colorado1.jpg";
import hackathon from "./assets/hackathon.jpg";
import hackathontop from "./assets/hackathon_top.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="header">
          <img src={phototimez} alt="photo timez" />
      </div>
      <div className="photo-gallery">
        <img src={allrecipes} width="600" height="338" className="photo-margin" alt="" />
        <img src={colorado1} width="600" height="450" className="photo-margin" alt="" />
        <img src={hackathon} width="709" height="397" className="photo-margin" alt="" />
        <img src={hackathontop} width="600" height="400" className="photo-margin" alt="" />
      </div>
    </div>
  );
}

export default App;
