import React from 'react';
import ReactPlayer from 'react-player';

export default class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sideVideos: []
    };
  }

  componentDidMount(){
    this.props.fetchSingleVideo(this.props.id);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.id !== nextProps.id){
      this.props.fetchSingleVideo(nextProps.id);
    }
  }

  render(){
    const { video } = this.props;
    if(!video){ return null };

    return(
      <div className="video-show-container">
        <div className="video-detail-container">
          <div className="video-player">
            <ReactPlayer url={video.video_url} controls={true} autoPlay={true}/>
          </div>
        </div>
      </div>
    )
  }
}
