import React from 'react';
import Location from './Location';

const places = [
  {title: "Shopping"},
  {title: "Casa"},
  {title: "Empresa"},
];

const LocationsList = (props) => (
  <ul className="locations-list shadow">
    {
      places.map(location => <Location location={location} />)
    }
  </ul>
);

export default LocationsList;
