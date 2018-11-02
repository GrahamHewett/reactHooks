import React from 'react';

export default class TvShow extends React.Component {
    render() {
        return (
    <div className="column">
      <h2>{this.props.name}</h2>
      <img src = {this.props.img} alt ={this.props.name + ' Cover'}></img>
    </div>
    )}
  };

//import TvShow from './tvShowComponent'; at top
// <TvShow /> in App return statement
