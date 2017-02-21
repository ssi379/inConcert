import { connect } from 'react-redux';
import { processVideoForm, fetchSingleVideo, deleteVideo, receiveErrors } from '../../actions/video_actions';
import VideoForm from './video_form';

const mapStateToProps = (state, ownProps) => {
  let video = { title: "", description: "" };
  let formType = "edit";



  if(ownProps.location.pathname === "/upload"){
    formType = "upload"
  } else {
    formType = "edit"
    video = state.video.currentVideo;
  }

  return({formType, currentUser: state.session.currentUser, video})
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // const action = ownProps.location.pathname === "/upload" ? createVideo : updateVideo

  return({
    processVideoForm: (formData, id) => dispatch(processVideoForm(formData, id)),
    deleteVideo: (id) => dispatch(deleteVideo(id)),
    fetchSingleVideo: (id) => dispatch(fetchSingleVideo(id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm)
