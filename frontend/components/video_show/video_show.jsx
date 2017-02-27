import React from 'react';
import ReactPlayer from 'react-player';
import {ReadMore} from 'react-read-more';
import TimeAgo from 'react-timeago';
import Halogen from 'halogen';
import { Link } from 'react-router';
import SidebarItem from './sidebar_item';
import CommentsIndexContainer from './comments/comments_index_container';
import { shuffleVideos } from '../../util/video_api_util';


export default class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sideVideos: []
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleVideo(this.props.id);
    this.props.fetchManyVideos();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.id !== nextProps.id){

      this.props.fetchSingleVideo(nextProps.id);
      window.scrollTo(0, 0);
    }
  }

  renderSidebarVideos(sideVideos){
    if(typeof sideVideos === "undefined"){ return null };
    sideVideos = sideVideos.slice(0, 10);
    return sideVideos.map((videoItem, idx) => {
      return <SidebarItem video={videoItem} key={idx} />
    })
  }

  renderSettingsOrAvatar(){
    if(this.props.currentUser && this.props.video.user_id === this.props.currentUser.id){
      return(
        <div className="settings-path">

          <Link className="settings-button" to={`/videos/${this.props.params.id}/edit`}>
            <i className="fa fa-cog" aria-hidden="true"></i> <span>Settings</span>
          </Link>
        </div>
      )
    } else {
      return(
        <span><img className="uploader-avatar" src={this.props.video.user.avatar_url}/></span>
      )
    }
  }

  renderLikeButton(){
    if(this.props.currentUser){

      if(this.props.likedByCurrentUser){
        return(
          <div className="like-button-container">
            <button id="like-button" onClick={this.handleUnlike}>
              <i className="fa fa-heart" aria-hidden="true"></i> Unlike
            </button>
          </div>
        )
      } else {
        return(
          <div className="like-button-container">
            <button id="like-button" onClick={this.handleLike}>
              <i className="fa fa-heart-o" aria-hidden="true"></i> Like
              </button>
            </div>
          )
        }
    } else {
      return(null)
    }
  }

  handleLike(event){
    event.preventDefault();
    const like = {};
    like.video_id = this.props.video.id;
    like.user_id = this.props.currentUser.id

    this.props.createLike(like);

  }

  handleUnlike(event){
    event.preventDefault();
    let dupLikes = this.props.video.likes.filter((like) => {
	     return like.video_id === this.props.video.id && like.user_id === this.props.currentUser.id;
     })


     if(dupLikes.length > 0){
       this.props.deleteLike(dupLikes[dupLikes.length - 1].id)
     }
  }



  render(){
    const { video } = this.props;
    const readMoreStyle = {
      textDecoration: "none"
    }
    if(!video){
      return(<Halogen.PulseLoader color={"#4bf"} className="spinner"/>)
    };

    return(
      <div className="video-show-container">

           <div className="video-player">
             <ReactPlayer
               className="the-video"
               url={video.video_url}
               controls={true}
               autoPlay={true}
               height={540}
               width={"100%"}
             />
           </div>

           <div className="video-show-info-container">

             <div className="main-video-content-wrapper">
               <div className="base-video-info">
                 <h1 className="video-title">{video.title}</h1>
                 <p className="identify-uploader">
                   from <Link className="uploader-name" to={`/users/${video.user.id}`}>{video.user.username}</Link> <TimeAgo className="video-show-timeago" date={video.upload_date} />
                 </p>

                 {this.renderSettingsOrAvatar()}
               </div>


               <div className="video-description-wrapper">

                 <div className="video-stats">
                   <span className="stat"><i className="fa fa-play stat-icon" aria-hidden="true"></i>{video.views.toLocaleString()}</span>
                   <span className="stat"><i className="fa fa-heart stat-icon" aria-hidden="true"></i>{video.likes.length.toLocaleString()}</span>
                 </div>

                 {this.renderLikeButton()}

                 <div className="video-description">
                   <ReadMore text={"Read More..."}
                     children={<p className="video-description">{video.description}</p>}
                     lines={3} />
                 </div>

               </div>

               <div className="comments-show">
                 <h1>{video.comments.length} Comments</h1>

                 <CommentsIndexContainer />
               </div>
             </div>


             <div className="sidebar-wrapper">
               <h1 className="sidebar-header">See more performances</h1>
               {this.renderSidebarVideos(this.props.listed_videos)}
             </div>
           </div>

       </div>

    )
  }
}
