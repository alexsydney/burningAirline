import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Airplane from './Airplane'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Search />
      <Airplane />
      </div>
    );
  }
}

export default App;
