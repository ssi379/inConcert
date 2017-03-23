import React from 'react';
import VideoSplash from './video_splash';
import VideoIndexItem from './video_index_item';
import VideoIndexRow from './video_index_row';
import { shuffleVideos } from '../../util/video_api_util';
import merge from 'lodash/merge';


export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      count: 6,
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount(){
    this.props.fetchManyVideos();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(){
   const { count } = this.state;
   const width = $(window).width();

   if (width > 1625 && count !== 6){
     $('.video-index').width("1800px");
     this.setState({ count: 6 });
   } else if(width < 1625 && width > 1282 && count !== 5){
     $('.video-index').width("1625px");
     this.setState({ count: 5 });
   } else if(width < 1281 && width > 1040 && count !== 4){
     $('.video-index').width("1300px");
     this.setState({ count: 4 });
   }else if(width < 1040 && width > 720 && count !== 3){
     $('.video-index').width("1020px");
     this.setState({ count: 3 });
   }else if(width < 720 && width > 480 && count !== 2){
     $('.video-index').width("580px");
     this.setState({ count: 2 });
   }
 }

 setCuratedRow(){
   let curatedVideos = merge([], this.props.listed_videos);
   if(typeof curatedVideos !== "undefined"){
     return shuffleVideos(curatedVideos).slice(0, 7);
   }
 }

 setLikesRow(){
   let likeVideos = merge([], this.props.listed_videos);
   if(typeof likeVideos !== "undefined"){
     return likeVideos.sort((a,b) => { return a.num_likes < b.num_likes });
   }
 }

 setViewsRow(){
   let viewsVideos = merge([], this.props.listed_videos);
   if(typeof viewsVideos !== "undefined"){
     return viewsVideos.sort((a,b) => { return a.views < b.views });
   }
 }

  render(){
    return(
      <div className="video-index">
        <div className="video-index-row">
          <h1 className="row-title">Watch musician-curated Staff Picks</h1>
          <VideoIndexRow count={this.state.count} videos={this.setCuratedRow()} />
        </div>
        <div className="video-index-row">
          <h1 className="row-title">Highly Acclaimed Performances</h1>
          <VideoIndexRow count={this.state.count} videos={this.setLikesRow()} />
        </div>
        <div className="video-index-row">
          <h1 className="row-title">See What's Trending</h1>
          <VideoIndexRow count={this.state.count} videos={this.setViewsRow()} />
        </div>
      </div>
    );
  }
}
