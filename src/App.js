import React, { Component } from 'react';
import './App.css';
import deathNoteImg from './deathNote.jpg';
import gameOfThronesImg from './gameOfThrones.jpg';
import theWireImg from './theWire.jpg';
import theWalkingDeadImg from './theWalkingDead.jpg';
import TvShow from './tvShowComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <main>
          <div className = "row">
            <TvShow name = "Black Mirror" img = './blackMirror.jpg' />
            <TvShow name = "Breaking Bad" img = './breakingBad.jpg' />
            <div className="column">
            <h2>Death Note</h2>
            <img src = {deathNoteImg} alt ="Death Note Cover"></img></div>
          </div>
          <div className = "row">
            <div className="column">
            <h2>Game of Thrones</h2>
            <img src = {gameOfThronesImg} alt ="Game of Thrones Cover"></img></div>
            <div className="column">
            <h2>The Wire</h2>
            <img src = {theWireImg} alt ="The Wire Cover"></img></div>
            <div className="column">
            <h2>The Walking Dead</h2>
            <img src = {theWalkingDeadImg} alt ="The Walking Dead Cover"></img></div>
          </div>
          </main>
        </div>
    );
  }
}

export default App;
