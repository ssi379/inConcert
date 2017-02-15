import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import VideoIndex from './video_index/video_index';

const App = ({children}) => (
  <div>
    <NavbarContainer />
    { children }
    <VideoIndex />
  </div>
)

export default App;
