import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './LocationDetails';

class LocationInfo extends PureComponent {

  render() {
    const { location, handleMarkerClick, showCloseBtn } = this.props;

    const details = location && location.details ? <LocationDetails location={location} /> : <div>Loading...</div>

    return <div className="location">
      {showCloseBtn && <div className="close shadow clickable" onClick={ _ => handleMarkerClick(null) }>Close</div>}
      <div className="info">
        {details}
      </div>
    </div>
  }


};

LocationInfo.propTypes = {
  location: PropTypes.object
};

export default LocationInfo;
