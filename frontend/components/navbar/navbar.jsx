import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  render(){
    const { currentUser, logout } = this.props;
    if(currentUser){
      return(
        <div id="nav-bar-logged-in">
          <img className="logo" src="https://s3.amazonaws.com/inconcert-dev/inConcert+logo_2.png" />
          <form onSubmit={logout}>
            <input type="submit" className="signout-button" value="Sign Out" />
          </form>
          <ul className="nav-right">
            <form>
              <input type="text" className="search-bar" value ="Search videos, artists and more"/>
              <span><i className="fa fa-search search-logged-in" aria-hidden="true"></i></span>
            </form>
            <li><img className="nav-avatar" src={currentUser.avatar_url} /></li>
            <li><button className="upload-button"><i className="fa fa-upload" aria-hidden="true"></i>Upload</button></li>
            <li>
            </li>

          </ul>

        </div>
      );
    } else {
      return (
        <div id="nav-bar-logged-out">
          <div className="nav-left">
            <img className="logo" src="https://s3.amazonaws.com/inconcert-dev/inConcert+logo_2.png" />
            <li><Link to="/signup" className="join-button">Join</Link></li>
            <li><Link to="/login" className="login-button">Log In</Link></li>
        </div>
          <form className="search-input">
            <input type="text" className="search-bar" value ="Search videos, artists and more"/>
            <i className="fa fa-search" aria-hidden="true"></i>
          </form>
        </div>
      )
    }
  }

}
