import React from 'react';

export default class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let searchQuery = this.props.location.search.slice(1);
    this.props.searchVideos(searchQuery);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.search.slice(1) !== nextProps.location.search.slice(1)){
      let searchQuery = nextProps.location.search.slice(1);
      nextProps.searchVideos(searchQuery);
    }
  }

  renderSearchResultItems(){

    if(typeof this.props.searchResults === "undefined"){ return null }
    return this.props.searchResults.map((video, idx) => {
      return(<li key={`search-${idx}`}>{video.title}</li>)
    })
  }

  render(){
    return(
      <div>
        <h1>HELLO</h1>
        {this.renderSearchResultItems()}
      </div>
    )
  }
}
