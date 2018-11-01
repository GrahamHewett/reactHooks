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
            <div className="column"><img src = {blackMirrorImg} alt ="Black Mirror Cover"></img></div>
            <div className="column"><img src = {breakingBadImg} alt ="Breaking Bad Cover"></img></div>
            <div className="column"><img src = {deathNoteImg} alt ="Death Note Cover"></img></div>
          </div>
          <div className = "row">
            <div className="column"><img src = {GOTImg} alt ="Game of Thrones Cover"></img></div>
            <div className="column"><img src = {theWireImg} alt ="The Wire Cover"></img></div>
            <div className="column"><img src = {walkingDeadImg} alt ="The Walking Dead Cover"></img></div>
          </div>
          </main>
        </div>
    );
  }
}

export default App;
