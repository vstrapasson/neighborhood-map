import React from 'react';

const LocationDetails = ({location, location: {details}}) => {
  if(details.error) {
    return (<p className="error">{details.error.message}</p>)
  }

  return (
    <div role="Complementary" className="location-details">
      <div className="title">{location.title}</div>
      <div>{details.description}</div>
      <div>Price: {details.price ? details.price.message : 'Not informed'}</div>
      <div>Rating: {details.rating}</div>
      <div>{details.error}</div>
    </div>
  );
};

export default LocationDetails;
