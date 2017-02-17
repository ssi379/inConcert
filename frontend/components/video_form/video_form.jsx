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
      thumbFile: null,
      thumbUrl: null,
      user_id: this.props.currentUser.id
    }

    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { processVideoForm } = this.props;
    const { title, description, user_id, videoFile  } = this.state
    let formData = new FormData();
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({videoFile: file, videoUrl: fileReader.result})
    }.bind(this);

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  renderUploadThumbnail(){

    return(
      <div className="file-upload">
        <Dropzone
          className="dropzone-video-upload"
          multiple={ false }
          accept="video/*">
          <div>
            <div className="placeholder">
              Drag a video or click here to upload
            </div>
          </div>
        </Dropzone>
      </div>
    )
  }

  render(){
    return(
      <div className="video-form-container">
        <div className="video-form-title">
          <h1>Video {this.props.formType}</h1>
        </div>

        <div className="video-form">
          <form onSubmit={this.handleSubmit}>
            {this.renderUploadThumbnail()}
          </form>
        </div>

        <img src={this.state.videoUrl} />
      </div>
    )
  }
}

// <input type="file" onChange={this.updateFile} />
