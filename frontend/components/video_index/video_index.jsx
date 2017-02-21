import React from 'react';
import VideoSplash from './video_splash';
import VideoIndexItem from './video_index_item';
import VideoIndexRow from './video_index_row';


export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      count: 5,
      windowWidth: window.innerWidth
    };
    this.handleScroll = this.handleScroll.bind(this);
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

   if (width > 1600 && count !== 6){
     $('.video-index').width("1800px");
     this.setState({ count: 6 });
   }else if(width < 1280 && width > 941 && count !== 4){
     $('.video-index').width("1300px");
     this.setState({ count: 4 });
   }else if(width < 940 && width > 720 && count !== 3){
     $('.video-index').width("1200px");
     this.setState({ count: 3 });
   }else if(width < 720 && width > 480 && count !== 2){
     $('.video-index').width("580px");
     this.setState({ count: 2 });
   }
 }

  handleScroll(e){
    e.preventDefault();
  }

  renderRow(){
    if(typeof this.props.listed_videos === "undefined"){ return null };
    return this.props.listed_videos.map((video, idx) => {
      return <VideoIndexItem video={video} key={idx} />
    })
  }




  render(){

    return(
      <div className="video-index">
        <div className="video-index-row">
          <h1 className="row-title">Watch musician-curated Staff Picks</h1>
          <VideoIndexRow count={this.state.count} videos={this.props.listed_videos} />
        </div>
        <div className="video-index-row">
          <h1 className="row-title">Highly Acclaimed Performances</h1>
          <VideoIndexRow count={this.state.count} videos={this.props.listed_videos} />
        </div>
        <div className="video-index-row">
          <h1 className="row-title">See What's Trending</h1>
          <VideoIndexRow count={this.state.count} videos={this.props.listed_videos} />
        </div>
      </div>
    )
  }
}
