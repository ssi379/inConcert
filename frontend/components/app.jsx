import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import VideoIndex from './video_index/video_index';
import VideoSplash from './video_index/video_splash';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  determineSplash(){
    if(["/", "/login", "signup"].includes(this.props.location.pathname)){
      return <VideoSplash />
    } else {
      return <div></div>
    }
  }

  render(){
    return(
      <div>
        <NavbarContainer />
        { this.props.children }
        {this.determineSplash()}
      </div>
    )
  }

}


export default App;
