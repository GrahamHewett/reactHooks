import React, { Component } from 'react';
import './App.css';
import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg';
import deathNoteImg from './deathNote.jpg';
import GOTImg from './gameofThrones.jpg';
import theWireImg from './theWire.jpg';
import walkingDeadImg from './walkingDead.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <main>
          <div className = "row">
            <div className="column"><img src = {blackMirrorImg} alt ="A"></img></div>
            <div className="column"><img src = {breakingBadImg} alt ="A"></img></div>
            <div className="column"><img src = {deathNoteImg} alt ="A"></img></div>
          </div>
          <div className = "row">
            <div className="column"><img src = {GOTImg} alt ="A"></img></div>
            <div className="column"><img src = {theWireImg} alt ="A"></img></div>
            <div className="column"><img src = {walkingDeadImg} alt ="A"></img></div>
          </div>
          </main>
        </div>
    );
  }
}

export default App;
