import React from 'react';
import Dropzone from 'react-dropzone';

export default class VideoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      videoFile: null,
      videoUrl: null,
      thumbUrl: null,
      user_id: this.props.currentUser.id
    }

    this.updateFile = this.updateFile.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.setThumbnail = this.setThumbnail.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
    formData.append("video[thumbnail]", thumbUrl);
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
    $('.dropzone-video-upload').css("background-color", "white")
    this.extractFrame(files);
    this.updateFile(files[0]);
  }


  onDragEnter(){
    $('.dropzone-video-upload').css("transition", "0.2s");
    $('.dropzone-video-upload').css("background-color", "rgb(212, 215, 223)");
  }
  onDragLeave(){

    $('.dropzone-video-upload').css("background-color", "white")
  }
  extractFrame(files) {

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
      $('#preview-thumbnail').css("height", "160")
    }

    video.autoplay = true;
    video.muted = true;

    video.addEventListener('loadedmetadata', initCanvas, false);
    video.addEventListener('loadeddata', drawFrame, false);

    video.src = URL.createObjectURL(files[0]);
    video.src += "#t=15";
  }




  renderUploadThumbnail(){
    if(this.state.thumbUrl === null){
      return(
        <div className="file-upload">
          <Dropzone
            className="dropzone-video-upload"
            multiple={false}
            accept="video/*"
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            onDrop={this.onDrop}>
            <div>
              <div className="placeholder">
                <h1 className="dropzone-text">Drag video file here to upload</h1>
              </div>

            </div>
          </Dropzone>
        </div>
      )
    } else {
      return(
        <img id="dropzone-preview"src={this.state.thumbUrl} />
      )
    }
  }

  setThumbnail(){
    let thumbUrl = document.getElementById('preview-thumbnail').src;
    this.setState({ thumbUrl });
  }

  handleInput(event){
   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  render(){
    const headerText = this.props.formType === "upload" ? "Upload your videos" : "Update video info"
    const buttonText = this.props.formType === "upload" ? "Upload Video" : "Update Video"
    return(
      <div className="video-form-container">
        <h1 className="video-form-title">{headerText}</h1>

        <form id="video-form" onSubmit={this.handleSubmit}>
          <div className="video-inputs">
            {this.renderUploadThumbnail()}

              <div className="input-fields">
                <label className="input-label">
                  Title
                  <br />
                  <input type="text"
                    onChange={this.handleInput}
                    value={this.state.title}
                    placeholder="Title"
                    className="title-input"
                    id="title" />
                </label>
                <br />
                <label className="input-label">
                  Description
                  <br />
                  <textarea onChange={this.handleInput}
                    value={this.state.value}
                    className="description-input"
                    id="description" />
                </label>
              </div>


          </div>

          <video id="video-preview"></video>
          <canvas id="canvas"></canvas>
          <br />
          <input id="video-submit" type="submit" value={buttonText} />
          <img onLoad={this.setThumbnail.bind(this)} id="preview-thumbnail" hidden={true} />

        </form>


      </div>
    )
  }
}
