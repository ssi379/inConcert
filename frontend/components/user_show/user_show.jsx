import React from 'react';
import Halogen from 'halogen'

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

  render(){
    const { profile } = this.props;

    if(!profile){
      return(<Halogen.PulseLoader color={"#4bf"} className="spinner"/>);
    }
    return(
      <div className="user-profile-container">
        <div className="avatar-show">
          <img src={profile.avatar_url} width={150} height={150}/>
        </div>
        <h1 className="username-show">{profile.username}</h1>

        <ul className="user-stats">
          <li>{profile.video_count} Videos</li>
          <li>{profile.likes_count} Likes</li>
        </ul>
      </div>
    )
  }
}
