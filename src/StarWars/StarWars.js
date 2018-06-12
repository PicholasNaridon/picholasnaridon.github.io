import React, { Component } from 'react';
import StarWars from './Components/StarWars'
import charData from './assets/data.js'
import './assets/styles/App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <StarWars data={charData} />
      </div>
    );
  }
}

export default App;
