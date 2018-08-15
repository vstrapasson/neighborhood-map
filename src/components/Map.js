import React, { Component } from 'react';

class Map extends Component {

  constructor(props) {
    super(props);
    this.maps = window.google.maps;
  }

  componentDidMount() {
    const map = new this.maps.Map(document.querySelector('.map'), {
        center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return (
      <div className="map">Map</div>
    );
  }

}

export default Map;
