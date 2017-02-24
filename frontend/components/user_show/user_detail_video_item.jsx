import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

export default class UserDetailVideoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      const { video } =  this.props;
      if(typeof video === "undefined"){
        return null;
      }

      const linkPath = `/videos/${video.id}`
      return(
        <div className="user-detail-item-container">

          <div className="video-index-item-thumbnail">
            <Link to={linkPath}><img src={video.thumbnail_url} width={305} height={176} /></Link>
          </div>

          <div>
            <h3 className="user-video-item-title">{video.title}</h3>
            <TimeAgo className="comment-item-timeago" date={video.upload_date} />
          </div>
        </div>
      )

  }
}
