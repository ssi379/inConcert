import React from 'react';

export default class VideoIndex extends React.Component {
  constructor (props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e){
    e.preventDefault();
  }




  render(){
    return(
      <div className="video-index">
        <div className="video-splash">
          <video id="splash-video" className="video-js vjs-default-skin" autoPlay loop>
            <source src="https://s3.amazonaws.com/inconcert-dev/concert_cut.m4v" type="video/mp4" />
          </video>
        </div>

        <i className="fa fa-chevron-down" aria-hidden="true" onClick={this.handleScroll} />
      </div>
    )
  }
}
