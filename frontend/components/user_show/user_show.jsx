import React from 'react';
import { Link } from 'react-router';
import Halogen from 'halogen'
import UserVideoItem from './user_video_item';
import UserDetail from './user_detail';

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
    if(typeof this.props.profile.videos === "undefined"){ return (<Halogen.PulseLoader color={"#4bf"} className="spinner"/>) }

    return this.props.profile.videos.slice(0, 6).map((video, idx) => {
      return(<UserVideoItem profile={this.props.profile} video={video} key={`user-${this.props.profile.id}-${idx}`} />)
    })
  }

  renderSeeMore(){
    let videoLength = this.props.profile.videos.length
    if(videoLength > 6){
      return(
        <div className="see-more">
          <Link to={`/users/${this.props.profile.id}/videos`} id="user-see-more-button">See More</Link>
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    const { profile } = this.props;

    if(!profile){
      return(<Halogen.PulseLoader color={"#4bf"} className="spinner"/>);
    }

    if(this.props.location.pathname.includes("likes")){
      return(
        <UserDetail videos={profile.liked_videos} profile={profile} detailType={"likes"} />
      )
    } else if(this.props.location.pathname.includes("videos")){
      return(
        <UserDetail videos={profile.videos} profile={profile} detailType={"videos"} />
      )
    }

    return(
      <div className="user-profile-container">

        <div className="sub-header">
          <ul className="profile-nav">
            <Link className="profile-nav-link" to={`/users/${profile.id}/videos`}>Videos</Link>
            <Link className="profile-nav-link" to={`/users/${profile.id}/likes`}>Likes</Link>
          </ul>
        </div>
        <img className="avatar-show" src={profile.avatar_url}/>

        <div className="user-headline">
          <h1 className="username-show">{profile.username}</h1>

          <ul className="user-stats">
            <Link to={`/users/${profile.id}/videos`}>{profile.video_count} Videos</Link>
            <span className="user-stat-divider"></span>
            <Link to={`/users/${profile.id}/likes`}>{profile.likes_count} Likes</Link>
          </ul>


        </div>

        <ul className="user-videos-list-container">
          {this.renderUserVideoItems()}
        </ul>
        {this.renderSeeMore()}
      </div>
    )
  }
}
