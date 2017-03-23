import React from 'react';
import { Link } from 'react-router';


export default class VideoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { video } =  this.props;
    const linkPath = `/videos/${video.id}`;
    return(
      <div className="video-index-item-container">

        <div className="video-index-item-thumbnail">
          <Link to={linkPath}><img src={video.home_index_thumbnail_url} /></Link>
        </div>

        <div>
          <h3 className="video-index-item-title title-ellipsis">{video.title}</h3>
        </div>

        <div className="index-uploader-info">
          <Link to={`/users/${video.user.id}`}>
            <img className="index-uploader-avatar" src={video.user.item_avatar_url} />
            <span className="index-item-uploader">{video.user.username}</span>
          </Link>
          <span className="index-item-views">{video.views.toLocaleString()} plays</span>
        </div>
      </div>
    );
  }
}
