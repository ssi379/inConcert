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

        <div>
          <h3 className="video-index-item-title title-ellipsis">{video.title}</h3>
        </div>

        <div className="index-uploader-info">
          <Link to="/">
            <img className="index-uploader-avatar" src={video.user.avatar_url} />
            <span className="index-item-uploader">{video.user.username}</span>
          </Link>
          <span className="index-item-views">{video.views} plays</span>
        </div>
      </div>
    )
  }
}
