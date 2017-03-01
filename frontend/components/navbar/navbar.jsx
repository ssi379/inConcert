import React from 'react';
import { hashHistory, Link } from 'react-router';
import SearchBarContainer from './search/search_bar_container';
export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout().then(() => { hashHistory.push("/") })
  }

  render(){
    const { currentUser } = this.props;
    if(currentUser){
      return(
        <div id="nav-bar-logged-in">
          <Link to="/"><img className="logo-logged-in" src={window.images.inconcertLogo}/></Link>


          <ul className="nav-right">
            <SearchBarContainer />

            <li className="nav-dropper">
              <img className="nav-avatar" src={currentUser.avatar_url} />
              <ul id="nav-dropdown" >
              	<li>
              		<Link to={`/users/${currentUser.id}`}>
                    <span className="user-welcome">Welcome, {currentUser.username}</span>
                    <span className="view-profile-sub">View Profile</span>
              		</Link>
              	</li>
                <Link to={`/users/${currentUser.id}/videos`}><li>Videos</li></Link>
                <Link to={`/users/${currentUser.id}/likes`} ><li className="dropdown-link-border">Likes</li></Link>
              	<li onClick={this.handleLogout}>
              		<button id="logout-button">Log Out</button>
              	</li>
              </ul>
            </li>

            <li><Link to="/upload"><button className="upload-button"><i className="fa fa-upload" aria-hidden="true"></i>Upload</button></Link></li>
            <li>
            </li>

          </ul>

        </div>
      );
    } else {
      return (
        <div id="nav-bar-logged-out">
          <div className="nav-left">
            <Link to="/"><img className="logo-logged-out" src={window.images.inconcertLogo} /></Link>
            <li><Link to="/signup" className="join-button">Join</Link></li>
            <li><Link to="/login" className="login-button">Log In</Link></li>
        </div>
          <SearchBarContainer />
        </div>
      )
    }
  }

}
