import React from 'react';
import { hashHistory } from 'react-router';

export default class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchQuery: ''
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(event){
    this.setState({ searchQuery: event.currentTarget.value });
  }

  handleSearchSubmit(event){
    event.preventDefault();
    const searchQuery = this.state.searchQuery;
    this.setState({ searchQuery: '' })
    hashHistory.push(`/search/?query=${searchQuery}`)
  }


  render(){

    return(
      <div>
        <form className="search-input">
          <input type="text"
            className="search-bar"
            onChange={this.handleSearchInput}
            value={this.state.searchQuery}
            placeholder="Search videos, artists and more"/>
          <button className="search-button" onClick={this.handleSearchSubmit}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    )
  }
}
