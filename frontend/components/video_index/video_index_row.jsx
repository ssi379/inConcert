import React from 'react';
import VideoIndexItem from './video_index_item';
import Carousel from './carousel.jsx';

export default class VideoIndexRow  extends React.Component{
  constructor(props){
    super(props);
  }


  handleCarousel(){
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  renderVideoIndexItems(){
    if(typeof this.props.videos === "undefined"){ return null }

    return this.props.videos.map((video, idx) => {
      return <VideoIndexItem video={video} key={idx}/>
    })
  }

  render(){

    return (
    <div className="carousel-container">
      <div className="carousel">
         <Carousel onLoad={this.handleCarousel()} videos={ this.renderVideoIndexItems() } numToSlide={ 3 }/>
       </div>
    </div>
    )
  }
}
