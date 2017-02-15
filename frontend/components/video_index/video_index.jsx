import React from 'react';

export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount(){
    let videoSplash = $('.video-splash');
    let splashVideos = [
      `url(https://s3.amazonaws.com/inconcert-dev/yeasayer.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/rubble.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/dk.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/youbred.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/silversun.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/yeasayer2.gif)`,
      `url(https://s3.amazonaws.com/inconcert-dev/cityofthesun.gif)`
    ]

    let currentVideo = 0;

    function nextVideo(){
      currentVideo = (currentVideo + 1) % splashVideos.length
      videoSplash.css(
        "background-image",
        splashVideos[currentVideo]
      )
      setTimeout(nextVideo, 1500);
    }

    setTimeout(nextVideo, 1500);
    videoSplash.css("background-image", splashVideos[0])

  }

  preload(){
    return(
      <div className="splash-preloader">
        <img src="https://s3.amazonaws.com/inconcert-dev/yeasayer.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/rubble.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/dk.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/youbred.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/silversun.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/yeasayer2.gif" width="1" height="1" />
        <img src="https://s3.amazonaws.com/inconcert-dev/cityofthesun.gif" width="1" height="1" />
      </div>
    )
  }

  render(){
    return(
      <div className="video-index">
        {this.preload()}
        <div className="video-splash"></div>
      </div>
    )
  }
}
