import React from 'react';
import SearchResultItem from './search_result_item';
import Halogen from 'halogen';
import Masonry from 'react-masonry-component';

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
      return(<SearchResultItem video={video} key={`search-${idx}`} />)
    })
  }

  renderResultHeader(){
    if(typeof this.props.searchResults === "undefined"){
      return <Halogen.PulseLoader color={"#4bf"} className="spinner" id="upload-spinner" display="none"/>
    } else {
      return(
        <h1 className="search-result-header">
          {this.props.searchResults.length} results for <strong className="result-query">{this.props.location.search.slice(7)}</strong>
        </h1>
      )
    }

  }

  render(){
    let masonryOptions = {
     transitionDuration: '0.5s',
   };
    return(
      <div className="search-results-container">
        {this.renderResultHeader()}
        <Masonry
          className={'search-results-index'}
          updateOnEachImageLoad={true}
          options={masonryOptions}>
          {this.renderSearchResultItems()}
        </Masonry>
      </div>
    )
  }
}
