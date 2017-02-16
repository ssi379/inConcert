import React from 'react';
import { Link } from 'react-router';

export default class VideoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { video } =  this.props;
    const linkPath = `/videos/${video.id}`
    return(
      <div className="video-index-item-container">

        <div className="video-index-item-thumbnail">
          <Link to={linkPath}><img src={video.thumbnail_url} width={217} height={122} /></Link>
        </div>

        <div className="video-index-item-title">
          <h3>{video.title}</h3>
        </div>

        <div className="index-uploader-info">
          <Link to="/">
            <img className="index-uploader-avatar" src={video.user.avatar_url} />
          </Link>
          <span>{video.user.username}</span>
          <span>{video.views} plays</span>
        </div>
      </div>
    )
  }
}
