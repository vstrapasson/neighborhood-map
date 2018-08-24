import React from 'react';

const Location = ({location, handleMarkerClick}) => (
  <li role="menuitem" tabIndex={0} className="clickable" onClick={ _ => handleMarkerClick(location)}>{location.title}</li>
);

export default Location;
