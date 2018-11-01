import React, { Component } from 'react';
import movieCover from './pickOfDestiny.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className = "movieTagline">
            This is the best and greatest movie in the world, this is just a tribute.
          </p>
          <img src={movieCover} className="movie-cover" alt="movie cover" />
        </header>
        <body>

        </body>
      </div>
    );
  }
}

export default App;
