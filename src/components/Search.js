import React, { Component } from 'react';

import LocationsList from './LocationsList';

class Search extends Component {

  onSearchChange(search) {
      this.props.handleFilter(search);
  }

  render() {
    return (
      <div className="search-container">
        <input onChange={e => this.onSearchChange(e.target.value)} className="shadow" type="search" name="search" placeholder="Type to search..."/>
        <LocationsList handleMarkerClick={this.props.handleMarkerClick} locations={this.props.locations} />
      </div>
    );
  }
}

export default Search;
