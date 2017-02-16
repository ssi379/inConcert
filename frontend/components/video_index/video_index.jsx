import React from 'react';
import VideoSplash from './video_splash';

export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e){
    e.preventDefault();
  }




  render(){
    
    return(
      <div className="video-index">

      </div>
    )
  }
}
