import React from 'react';
import VideoSplash from './video_splash';
import VideoIndexItem from './video_index_item';
import Carousel from 'nuka-carousel';

export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.props.fetchManyVideos();
  }

  handleScroll(e){
    e.preventDefault();
  }

  renderRow(){
    if(typeof this.props.listed_videos === "undefined"){ return null };
    return this.props.listed_videos.map((video, idx) => {
      return <VideoIndexItem video={video} key={idx} />
    })
  }




  render(){

    return(
      <div className="video-index">
        <div className="video-index-row">
          <h1 className="row-title">Watch musician-curated Staff Picks</h1>
          <ul className="video-bar">
            <Carousel cellAlign="center" slidesToShow={3}>
                {this.renderRow()}
            </Carousel>
          </ul>
        </div>
        <div className="video-index-row">
          <h1 className="row-title">Highly Acclaimed Performances</h1>
        </div>
        <div className="video-index-row">
          <h1 className="row-title">See What's Trending</h1>
        </div>
      </div>
    )
  }
}
