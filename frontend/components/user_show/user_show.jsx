import React from 'react';
import { Link } from 'react-router';
import Halogen from 'halogen'
import UserVideoItem from './user_video_item';

export default class UserShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserProfile(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id !== nextProps.params.id){
      this.props.fetchUserProfile(nextProps.params.id);
    }
  }

  renderUserVideoItems(){
    let end = 6;
    if(this.props.profile.videos.length % 2 !== 0){ end -= 1 }
    if(typeof this.props.profile.videos === "undefined"){ return null }
    
    return this.props.profile.videos.slice(0,end).map((video, idx) => {
      return(<UserVideoItem profile={this.props.profile} video={video} key={`user-${this.props.profile.id}-${idx}`} />)
    })
  }

  render(){
    const { profile } = this.props;

    if(!profile){
      return(<Halogen.PulseLoader color={"#4bf"} className="spinner"/>);
    }

    return(
      <div className="user-profile-container">

        <div className="sub-header">
          <ul className="profile-nav">
            <Link className="profile-nav-link" to="/">Videos</Link>
            <Link className="profile-nav-link" to="/">Likes</Link>
          </ul>
        </div>
        <img className="avatar-show" src={profile.avatar_url} width={150} height={150}/>

        <div className="user-headline">
          <h1 className="username-show">{profile.username}</h1>

          <ul className="user-stats">
            <li>{profile.video_count} Videos</li>
            <span className="user-stat-divider"></span>
            <li>{profile.likes_count} Likes</li>
          </ul>


        </div>

        <ul className="user-videos-list-container">
          {this.renderUserVideoItems()}
        </ul>
        <div className="see-more">
          <Link to="/" id="user-see-more-button">See More</Link>
        </div>
      </div>
    )
  }
}
