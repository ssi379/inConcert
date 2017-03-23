import React from 'react';
import Scroll from 'react-scroll';
import SplashLogo from './splash_logo';

const scroll = Scroll.animateScroll;

const VideoSplash = () => (
  <div className="splash">
      <div className="splash-header">
        <SplashLogo className="splash-logo"/>
        <h1 className="splash-header-main">Welcome to inConcert</h1>
        <h3 className="splash-header-secondary">Celebrate live music with inConcert's top videos or share your own.</h3>
        <button className="start-watching" onClick={() => {scroll.scrollTo(790, 0)}}>Start watching</button>
      </div>
      <video id="splash-video" className="video-js vjs-default-skin" autoPlay loop>
        <source src="https://s3.amazonaws.com/seed-middle/concert_cut_v2.mp4" type="video/mp4" />
      </video>
  </div>

);

export default VideoSplash;
