import React, { Component } from 'react';
import './App.css';
import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg'
import deathNoteImg from './deathNote.jpg'
import gameOfThronesImg from './gameofThrones.jpg'
import WalkingDeadImg from './walkingDead.jpg'
import WireImg from './theWire.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "tvShows">
          <h1 className="tv">Black Mirror</h1>
          <h1 className="tv">Breaking Bad</h1>
          <h1 className="tv">Death Note</h1>
          <h1 className="tv">Game of Thrones</h1>
          <h1 className="tv">The Walking Dead</h1>
          <h1 className="tv">The Wire</h1>
          </div>
        </header>
        <body>

        </body>
      </div>
    );
  }
}

export default App;
