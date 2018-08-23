import React, { Component } from 'react';

import Search from './Search';
import LocationInfo from './LocationInfo';

class Sidebar extends Component {
  render() {
    const { locations, selectedLocation, handleMarkerClick, handleFilter } = this.props;
    let component;

    if (selectedLocation) {
      component = <LocationInfo handleMarkerClick={handleMarkerClick} location={selectedLocation} showCloseBtn={true} />
    } else {
      component = <Search handleFilter={handleFilter} handleMarkerClick={handleMarkerClick} locations={locations} />
    }

    return (
      <aside id="side-bar">
        {component}
      </aside>
    );
  }

}

export default Sidebar;
