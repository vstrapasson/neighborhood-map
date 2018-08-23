import React from 'react';

const Location = ({location, handleMarkerClick}) => (
  <li className="clickable" onClick={ _ => handleMarkerClick(location)}>{location.title}</li>
);

export default Location;
