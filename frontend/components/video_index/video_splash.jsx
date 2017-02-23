import React from 'react';

const VideoSplash = () => (
  <div className="splash">
      <video id="splash-video" className="video-js vjs-default-skin" autoPlay loop>
        <source src="https://s3.amazonaws.com/seed-middle/concert_cut.mp4" type="video/mp4" />
      </video>

    <i className="fa fa-chevron-down" aria-hidden="true" />
  </div>

);

export default VideoSplash;
