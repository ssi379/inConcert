import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <h1>inConcert</h1>
    <NavbarContainer />
    { children }
  </div>
)

export default App;
