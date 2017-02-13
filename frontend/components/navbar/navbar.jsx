import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  render(){
    const { currentUser, logout } = this.props;
    if(currentUser){
      return(
        <ul id="nav-dropdown">
          <li><h2>{currentUser.username}</h2></li>
          <img src={currentUser.avatar_url} />
          <li>
            <form onSubmit={logout}>
              <input type="submit" value="Sign Out" />
            </form>
          </li>

        </ul>
      );
    } else {
      return (
        <div id="session-buttons">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </div>
      )
    }
  }

}
