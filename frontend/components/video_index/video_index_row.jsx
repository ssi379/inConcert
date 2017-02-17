import React from 'react';
import VideoIndexItem from './video_index_item';
import Carousel from 'nuka-carousel';

export default class VideoIndexRow  extends React.Component{
  constructor(props){
    super(props);
  }

  renderVideoIndexItems(){
    if(typeof this.props.videos === "undefined"){ return null }

    return this.props.videos.map((video, idx) => {
      return <VideoIndexItem video={video} key={idx}/>
    })
  }

  render(){

    return(
      <div className="carousel-container">
        <Carousel
          className="video-carousel"
          dragging={false}
          slidesToShow={4}
          slidesToScroll={4}
          height={"500px"}
          decorators={[{
          component: React.createClass({
            render() {
              return (
                <button
                  className="left-button"
                  onClick={this.props.previousSlide}>
                  {"<"}
                </button>
              );
            }
          }),
          position: 'CenterLeft'
        },{
          component: React.createClass({
            render() {
              return (
                <button
                  className="right-button"
                  onClick={this.props.nextSlide}>
                  {">"}
                </button>
              );
            },
          }),
          position: 'CenterRight'
        }]}
          width={"1200px"}>
            {this.renderVideoIndexItems()}
        </Carousel>
      </div>
    )
  }
}
