import React from 'react';
import background from "./assets/background.jpg";
import parislove from "./assets/paris-love.png";
import cats from './assets/cats.jpg';
import eiffeltower from './assets/eiffel-tower.jpg';
import eiffeltower2 from './assets/eiffel-tower2.jpg';
import eiffeltower3 from './assets/eiffel-tower3.jpg';
import eiffeltower4 from './assets/eiffel-tower4.jpg';
import iloveparis from './assets/i-love-paris.jpg';
import kanye from './assets/kanye.jpg';
import lechampdemars from './assets/le-champ-de-mars.jpg';
import moulinrouge from './assets/moulin-rouge.jpg';
import nailedit from './assets/nailed-it.jpg';
import nightlife from './assets/nightlife.jpg';
import parisnight from './assets/paris-night.jpg';
import photobomb from './assets/photobomb.jpg';
import spongebob from './assets/spongebob.jpg';
import whoinparis from './assets/who-in-paris.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div id="header">
          <img src={parislove} alt="PARIS LOVE" />
      </div>
      <div className="photo-gallery">
        <img src={eiffeltower} width="481" height="588" className="photo-margin" alt="" />
        <img src={nailedit} width="444" height="504" className="photo-margin" alt="" />
        <img src={eiffeltower2} width="300" height="500" className="photo-margin" alt="" />
        <img src={eiffeltower3} width="500" height="500" className="photo-margin" alt="" />
        <img src={iloveparis} width="506" height="502" className="photo-margin" alt="" />
        <img src={kanye} width="330" height="250" className="photo-margin" alt="" />
        <img src={lechampdemars} width="425" height="220" className="photo-margin" alt="" />
        <img src={moulinrouge} width="375" height="250" className="photo-margin" alt="" />
        <img src={nightlife} width="360" height="250" className="photo-margin" alt="" />
        <img src={whoinparis} width="525" height="298" className="photo-margin" alt="" />      
        <img src={cats} width="558" height="317" className="photo-margin" alt="" />
        <img src={eiffeltower4} width="450" height="300" className="photo-margin" alt="" />
        <img src={parisnight} width="528" height="591" className="photo-margin" alt="" />
        <img src={photobomb} width="497" height="591" className="photo-margin" alt="" />
        <img src={spongebob} width="490" height="491" className="photo-margin" alt="" />
      </div>
    </div>
  );
}

export default App;
