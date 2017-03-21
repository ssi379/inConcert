import React from 'react';

const SplashLogo = () => (
  <div className="animated-logo-container">


    <img src={window.images.logoLeft4} id="left4" />
    <img src={window.images.logoLeft3} id="left3" />
    <img src={window.images.logoLeft2} id="left2" />
    <img src={window.images.logoLeft1} id="left1" />


    <img src={window.images.logoMain} id="main-logo"/>

    <img src={window.images.logoRight1} id="right1" />
    <img src={window.images.logoRight2} id="right2" />
    <img src={window.images.logoRight3} id="right3" />
    <img src={window.images.logoRight4} id="right4" />

  </div>

);

export default SplashLogo;
