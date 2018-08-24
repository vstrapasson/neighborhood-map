import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './LocationDetails';

class LocationInfo extends PureComponent {

  render() {
    const { location, handleMarkerClick, showCloseBtn } = this.props;

    const details = location && location.details ? <LocationDetails location={location} /> : <div>Loading...</div>

    return <div className="location">
      {showCloseBtn && <div
        tabIndex={0}
        role="button"
        className="close shadow clickable"
        onKeyPress={e => {
          if(e.key === 'Enter')
            handleMarkerClick(null);
        }}
        onClick={ _ => handleMarkerClick(null) }>Close</div>}
      <div role="contentinfo" className="info">
        {details}
      </div>
    </div>
  }


};

LocationInfo.propTypes = {
  location: PropTypes.object
};

export default LocationInfo;
