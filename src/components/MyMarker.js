import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import LocationInfo from './LocationInfo';

class MyMarker extends Component {

  state = {
    isOpen: false,
    animation: 2
  }

  componentWillReceiveProps(nextProps) {
    const { selectedLocation, location } = nextProps;
    if (selectedLocation && selectedLocation.title === location.title) {
      this.setState({
        isOpen: true,
        animation: 1
      });
    } else {
      this.setState({ isOpen: false, animation: 0 })
    }
  }


  onToggleOpen(location) {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
    this.props.handleMarkerClick(location);
  }

  render() {
    const { location, selectedLocation } = this.props;

    return (
      <Marker
        onClick={ _ => {
          this.onToggleOpen(location)
        }}
        animation={this.state.animation}
        position={location.position} >
        {this.state.isOpen &&
          <InfoWindow onCloseClick={ _ => this.onToggleOpen(null)}>
            <div style={{width: `200px`, height: `150px`}}>
              <LocationInfo location={selectedLocation} showCloseBtn={false} />
            </div>
          </InfoWindow>}
      </Marker>
    );
  }

}

MyMarker.propTypes = {
  location: PropTypes.object,
  selectedLocation: PropTypes.object,
};

export default MyMarker;
