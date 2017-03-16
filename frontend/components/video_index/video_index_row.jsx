import React from 'react';
import VideoIndexItem from './video_index_item';
import Carousel from './carousel.jsx';
import Halogen from 'halogen';

export default class VideoIndexRow  extends React.Component{
  constructor(props){
    super(props);
  }


  handleCarousel(){
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

  renderVideoIndexItems(){
    if(typeof this.props.videos === "undefined"){ return (<Halogen.PulseLoader color={"#4bf"} className="spinner"/>) }

    return this.props.videos.map((video, idx) => {
      return <VideoIndexItem video={video} key={idx}/>
    })
  }

  render(){

    return (
    <div className="carousel-container">
      <div className="carousel">
         <Carousel count={this.props.count} onLoad={this.handleCarousel()} videos={ this.renderVideoIndexItems() }/>
       </div>
    </div>
    )
  }
}
