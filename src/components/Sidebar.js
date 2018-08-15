import React, { Component } from 'react';

import LocationsList from './LocationsList';
import Search from './Search';

class Sidebar extends Component {
  render() {
    return (
      <aside id="side-bar">
        <Search />
        <LocationsList />
      </aside>
    );
  }

}

export default Sidebar;
