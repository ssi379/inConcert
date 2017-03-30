import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import VideoIndex from './video_index/video_index';
import VideoSplash from './video_index/video_splash';
import Footer from './footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  renderSplash(){
    let currentPath = this.props.router.location.pathname;

    if(["/", "/videos"].includes(currentPath)){
      return <VideoSplash className="video-splash" />
    } else if(["/login", "/signup"].includes(currentPath)){
      return(
        <video id="splash-video" className="video-js vjs-default-skin" autoPlay loop>
          <source src="https://s3.amazonaws.com/seed-middle/concert_cut_v2.mp4" type="video/mp4" />
        </video>
      )
    } else {
      return <div></div>
    }
  }

  renderFooter(){
    let currentPath = this.props.router.location.pathname;

    if(currentPath.includes('login') || currentPath.includes('signup')){
      return null;
    } else {
      return <Footer />
    }
  }

  renderPush(){
    let currentPath = this.props.router.location.pathname;

    if(currentPath.includes('login') || currentPath.includes('signup')){
      return null;
    } else {
      return <div className="push" />
    }
  }

  render(){
    return(
      <div className>
        <NavbarContainer />
        {this.renderSplash()}
        { this.props.children }
        {this.renderPush()}
        {this.renderFooter()}
      </div>
    )
  }

}


export default App;
