import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

const LocationsList = ({locations, handleMarkerClick}) => (
  <ul role="menubar" className="locations-list shadow">
    {
      locations.map(location => <Location
        handleMarkerClick={handleMarkerClick}
        key={location.title} location={location} />)
    }
  </ul>
);

LocationsList.protoTypes = {
  locations: PropTypes.array.isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
}

export default LocationsList;
