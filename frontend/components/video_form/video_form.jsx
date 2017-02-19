import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class VideoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "test",
      description: "testing",
      videoFile: null,
      videoUrl: null,

      thumbUrl: null,
      user_id: this.props.currentUser.id
    }

    this.updateFile = this.updateFile.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.setThumbnail = this.setThumbnail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { processVideoForm } = this.props;
    const { title, description, user_id, videoFile, thumbUrl  } = this.state
    let formData = new FormData();

    formData.append("video[title]", title);
    formData.append("video[description]", description);
    formData.append("video[videoitem]", videoFile);
    formData.append("video[user_id]", user_id);
    processVideoForm(formData);
  }


  updateFile(file){
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({videoFile: file, videoUrl: fileReader.result})
    }.bind(this);

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  onDrop(files){
    console.log("Received files: ", files[0]);
    this.extractFrames(files);
    this.updateFile(files[0]);
  }

  extractFrames(files) {

    let video = document.getElementById('video-preview')
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    function initCanvas(e) {
      canvas.width = this.videoWidth;
      canvas.height = this.videoHeight;
    }

    function drawFrame(e) {
      this.pause();
      ctx.drawImage(this, 0, 0);
      document.getElementById('preview-thumbnail').src = canvas.toDataURL();
    }

    video.autoplay = true;
    video.muted = true;

    video.addEventListener('loadedmetadata', initCanvas, false);
    video.addEventListener('loadeddata', drawFrame, false);

    video.src = URL.createObjectURL(files[0]);
    video.src += "#t=15";
  }



  renderUploadThumbnail(){

    return(
      <div className="file-upload">
        <Dropzone
          className="dropzone-video-upload"
          multiple={false}
          accept="video/*"
          onDrop={this.onDrop}>
          <div>
            <div className="placeholder">
              Drag a video or click here to upload
            </div>

          </div>
        </Dropzone>
      </div>
    )
  }

  setThumbnail(){
    let thumbUrl = document.getElementById('preview-thumbnail').src;
    this.setState({ thumbUrl });
  }

  render(){

    return(
      <div className="video-form-container">
        <div className="video-form-title">
          <h1>Video {this.props.formType}</h1>
        </div>

        <form id="video-form" onSubmit={this.handleSubmit}>
          {this.renderUploadThumbnail()}

          <video id="video-preview"></video>
          <canvas id="canvas"></canvas>
          <input type="submit" value={this.props.formType} />
          <div id="output">
            <img onLoad={this.setThumbnail.bind(this)} id="preview-thumbnail" />
          </div>
        </form>


      </div>
    )
  }
}
