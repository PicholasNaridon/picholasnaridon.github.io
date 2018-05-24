import React, { Component } from 'react';
import StarWars from './Components/StarWars'
import charData from './assets/data.js'

class App extends Component {

  render() {
    return (
        <StarWars data={charData} />
    );
  }
}

export default App;
