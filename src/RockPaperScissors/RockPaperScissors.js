import React, { Component } from 'react';
import Board from './components/Board'
import './assets/styles/App.css';


class RockPaperScissors extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default RockPaperScissors;
