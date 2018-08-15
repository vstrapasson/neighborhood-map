import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './components/Map';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
