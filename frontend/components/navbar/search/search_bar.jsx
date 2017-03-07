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

  renderSearchButton(){
    if(this.state.searchQuery.length > 0){
      return(
        <button className="search-button" onClick={this.handleSearchSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      )
    } else {
      return(
        <button className="search-button" onClick={this.handleSearchSubmit} disabled>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      )
    }
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
          {this.renderSearchButton()}
        </form>
      </div>
    )
  }
}
