import React from 'react';
import { Link } from 'react-router';

export default class UserVideoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      const { video, profile } =  this.props;
      if(typeof video === "undefined"){
        return null;
      }

      const linkPath = `/videos/${video.id}`
      return(
        <div className="user-item-container">

          <div className="video-index-item-thumbnail">
            <Link to={linkPath}><img src={video.user_show_thumbnail_url} /></Link>
          </div>

          <div>
            <h3 className="user-video-item-title">{video.title}</h3>
          </div>

          <div className="index-uploader-info">
            <Link to={`/users/${this.props.profile.id}`}>
              <img className="index-uploader-avatar" src={this.props.profile.item_avatar_url} />
              <span className="index-item-uploader">{this.props.profile.username}</span>
            </Link>
            <span className="index-item-views">{video.views.toLocaleString()} plays</span>
          </div>
        </div>
      )

  }
}
