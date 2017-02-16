import React from 'react';
import ReactPlayer from 'react-player';
import {ReadMore} from 'react-read-more';
import SidebarItem from './sidebar_item';

export default class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sideVideos: []
    };
  }

  componentDidMount(){
    this.props.fetchSingleVideo(this.props.id);
    this.props.fetchManyVideos();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.id !== nextProps.id){
      this.props.fetchSingleVideo(nextProps.id);
    }
    // this.setState({sideVideos})
  }

  renderSidebarVideos(sideVideos){
    if(typeof sideVideos === "undefined"){ return null };

    return sideVideos.map((videoItem, idx) => {
      return <SidebarItem video={videoItem} key={idx} />
    })
  }

  render(){
    const { video } = this.props;
    const readMoreStyle = {
      textDecoration: "none"
    }

    if(!video){ return null };
    return(
      <div className="video-show-container">

          <div className="video-player">
            <ReactPlayer
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
                <p className="identify-uploader">from <span className="uploader-name">{video.user.username}</span></p>
                <span><img className="uploader-avatar" src={video.user.avatar_url}/></span>
              </div>

              <div className="video-description-wrapper">

                <div className="video-stats">
                  <span className="stat"><i className="fa fa-play stat-icon" aria-hidden="true"></i>{video.views}</span>
                  <span className="stat"><i className="fa fa-heart stat-icon" aria-hidden="true"></i>100</span>
                </div>

                <div className="video-description">
                  <ReadMore text={"Read More..."}
                    children={<p className="video-description">{video.description.slice(2, -2)}</p>}
                    lines={3} />
                </div>

              </div>

              <div className="comments-show">
                <h1>16 Comments</h1>
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
