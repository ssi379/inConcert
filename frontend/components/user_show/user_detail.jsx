import React from 'react';
import { Link } from 'react-router';
import UserDetailVideoItem from './user_detail_video_item';

export default class UserDetail extends React.Component{
  constructor(props){
    super(props);
  }

  renderUserVideoItems(){
    if(typeof this.props.videos === "undefined"){ return null }

    return this.props.videos.map((video, idx) => {
      return(<UserDetailVideoItem video={video} key={`${idx}`} />)
    })
  }

  renderHeader(){
    const { detailType, profile } = this.props;

    if(detailType === "likes"){
      return(
        <div className="detail-header-container">
          <h1 className="detail-header">Videos <Link to={`/users/${profile.id}`}>{profile.username}</Link> likes</h1>
        </div>
      )
    } else {
      return(
        <div className="detail-header-container">
          <h1 className="detail-header"><Link to={`/users/${profile.id}`}>{`${profile.username}'s`}</Link> Videos</h1>
        </div>
      )
    }
  }

  render(){
      const { videos } =  this.props;
      if(typeof videos === "undefined"){
        return null;
      }


      return(
        <div className="user-video-detail">
          {this.renderHeader()}
          <div className="user-video-detail-container">
            {this.renderUserVideoItems()}
          </div>
        </div>
      )

  }
}
