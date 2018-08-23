import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Sidebar from './components/Sidebar';

import * as Foursquare from './utils/Foursquare';

const initialLocations = [
  { id: '49f37c28f964a520a36a1fe3', title: "Astor Wines & Spirits", position: { lat: 40.72801404034635, lng: -73.9930376 }},
  { id: '57e9590a498e2d323e20c667', title: "Los Mariscos", position: { lat: 40.74199972810892, lng: -74.00589 }},
  { id: '59580ce6db1d8148fee3d383', title: "Los Tacos No. 1", position: { lat: 40.7571203, lng: -73.9875342 }},
  { id: '579f74eb498e9a4d6caabeda', title: "Little Canal", position: { lat: 40.714317, lng: -73.990361 }},
  { id: '579c12cd498e6e815b3acf50', title: "Eataly Downtown", position: { lat: 40.710075, lng: -74.011976 }},
];

class App extends Component {

  state = {
    locations: initialLocations,
  }

  handleMarkerClick(location) {
    this.setState({selectedLocation: location});
    if (location && !location.details) {
      Foursquare.getDetails(location.id)
        .then(r => {
          this.setState({selectedLocation: {...location, details: {...r.venue} }})
        }).catch(e => this.setState({selectedLocation: {...location, details: {error: e}}}))
    }
  }

  handleFilter(search) {
    this.setState({
      locations: initialLocations.filter(l => l.title.toLowerCase().includes(search.toLowerCase()))
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          handleFilter={s => this.handleFilter(s)}
          handleMarkerClick={l => this.handleMarkerClick(l)}
          selectedLocation={this.state.selectedLocation}
          locations={this.state.locations}
        />
        <div className="map-container">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuoe2iEGQK7eTFqoF3FCcHcVPUh7JUF20"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="map" style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            locations={this.state.locations}
            selectedLocation={this.state.selectedLocation}
            handleMarkerClick={l => this.handleMarkerClick(l)}
          />
        </div>
      </div>
    );
  }
}

export default App;
