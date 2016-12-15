import React, { Component } from 'react';
import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState( { term: term });
    this.props.onSearchTermChange(term);
  }

  render() {
     return (
       <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
       </div>
     )
  }
};

export default SearchBar;
