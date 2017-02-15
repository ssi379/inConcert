import React from 'react';

export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
  }



  render(){
    return(
      <div className="video-index">

        <div className="video-splash">
          <video id="splash-video" className="video-js vjs-default-skin" autoPlay loop>
            <source src="https://s3.amazonaws.com/inconcert-dev/concert_cut.m4v" type="video/mp4" />
            <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
      </video>
        </div>
      </div>
    )
  }
}
