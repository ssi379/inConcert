import React from 'react';
import Dropzone from 'react-dropzone';
import Halogen from 'halogen';
import { hashHistory } from 'react-router';

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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
      this.props.clearErrors([]);
      if(this.props.router.location.pathname === "/upload"){
        this.setState({title: "",
          description: "",
          user_id: this.props.currentUser.id,
          videoFile: null,
          videoUrl: null,
          thumbUrl: null})
      } else {
        let videoId = this.props.params.id
        this.props.fetchSingleVideo(videoId).then((video) => {
          let fillVideo = video.video
          this.setState({title: fillVideo.title,
            description: fillVideo.description,
            user_id: fillVideo.user_id,
            videoFile: fillVideo.video_url,
            thumbUrl: fillVideo.thumbnail_url})
      })
    }
}

  componentWillReceiveProps(nextProps){
    // $('#upload-spinner').css("display", "none")
    if(nextProps.router.location.pathname === "/upload"){
          this.setState({title: "",
            description: "",
            user_id: this.props.currentUser.id,
            videoFile: null,
            videoUrl: null,
            thumbUrl: null})
        }
       else if(nextProps.router.location.pathname !== this.props.location.pathname) {
        this.props.clearErrors([]);
        let videoId = nextProps.params.id
        this.props.fetchSingleVideo(videoId).then((video) => {
          let fillVideo = video.video
          this.setState({title: video.title,
            description: fillVideo.description,
            user_id: fillVideo.user_id,
            videoFile: fillVideo.video_url,
            thumbUrl: fillVideo.thumbnail_url})
      })
  }

}



  handleSubmit(e){
    e.preventDefault();
    const { processVideoForm } = this.props;
    const { title, description, user_id, videoFile, thumbUrl  } = this.state
    let formData = new FormData();
    formData.append("video[title]", title);
    formData.append("video[description]", description);
    if(videoFile){
      formData.append("video[videoitem]", videoFile);
      formData.append("video[thumbnail]", thumbUrl);
    }

    formData.append("video[user_id]", user_id);
    // $('#upload-spinner').css("display", "block")
    processVideoForm(formData).then((video) => {
      hashHistory.push(`/videos/${video.video.id}`)
    });
  }

  handleUpdate(e){
    e.preventDefault();
    const { processVideoForm } = this.props;
    let videoId = this.props.params.id


    let formData = new FormData();

    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);

    let postProcessFetch = this.props.fetchSingleVideo;
    processVideoForm(formData, videoId).then(() => {
      postProcessFetch(videoId).then(() => {
        hashHistory.push(`/videos/${videoId}`)
      })
    });
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

  handleDelete(e){
    let videoId = this.props.params.id;
    let alertTitle = this.state.video;
    this.props.deleteVideo(videoId).then(() => {
      hashHistory.push("/")
    });
  }

  renderDelete(){
    if(this.props.formType === "upload"){
      return null;
    } else {
      return(
        <input type="submit" id="video-delete" onClick={this.handleDelete} value="Delete Video"/>
      )
    }
  }

  renderErrors(){
    let errors = this.props.errors
    if(errors.length === 0){ return null; }
    return(
      <ul className="error-message video-form-error">
        {Object.keys(errors).map( (id, idx) => (
          <li key={`error-${idx}`}>{`${id.charAt(0).toUpperCase() + id.slice(1)} ${errors[id]}`}</li>
        ))}
      </ul>
    );
  }

  handleInput(event){
   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  render(){
    const headerText = this.props.formType === "upload" ? "Upload your videos" : "Update video info"
    const buttonText = this.props.formType === "upload" ? "Upload Video" : "Update Video"
    const submitHandler = this.props.formType === "upload" ? this.handleSubmit : this.handleUpdate
    return(
      <div className="video-form-container">
        <h1 className="video-form-title">{headerText}</h1>
        {this.renderErrors()}
        <form id="video-form" onSubmit={submitHandler}>
          <div className="video-inputs">
            {this.renderUploadThumbnail()}
              <Halogen.PulseLoader color={"#4DAF7C"} className="spinner" id="upload-spinner" display="none"/>
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
                    value={this.state.description}
                    className="description-input"
                    id="description" />
                </label>
              </div>


          </div>

          <video id="video-preview"></video>
          <canvas id="canvas"></canvas>
          <br />
          <input id="video-submit" type="submit" value={buttonText} />
          <img onLoad={this.setThumbnail} id="preview-thumbnail" hidden={true} />

        </form>
        {this.renderDelete()}


      </div>
    )
  }
}
