import React from 'react';
import PropTypes from 'prop-types';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

import MyMarker from './MyMarker';

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 40.7391253, lng: -74.0057827 }}
  >
    {props.locations.map(location => <MyMarker
      key={location.title}
      location={location}
      selectedLocation={props.selectedLocation}
      handleMarkerClick={props.handleMarkerClick}
      position={location.position} />)}
  </GoogleMap>
));

Map.propTypes = {
  locations: PropTypes.array.isRequired
};

export default Map;
