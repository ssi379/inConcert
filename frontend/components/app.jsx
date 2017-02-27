import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import VideoIndex from './video_index/video_index';
import VideoSplash from './video_index/video_splash';
import Footer from './footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  determineSplash(){
    if(["/", "/login", "/signup", "/videos"].includes(this.props.location.pathname)){
      return <VideoSplash className="video-splash" />
    } else {
      return <div></div>
    }
  }

  render(){
    return(
      <div className>
        <NavbarContainer />
        {this.determineSplash()}
        { this.props.children }


        <Footer />
      </div>
    )
  }

}


export default App;
