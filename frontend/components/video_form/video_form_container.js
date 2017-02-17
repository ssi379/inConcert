import { connect } from 'react-redux';
import { createVideo, updateVideo, receiveErrors } from '../../actions/video_actions';
import VideoForm from './video_form';

const mapStateToProps = (state, ownProps) => {
  let video = { title: "", description: "" };
  let formType = "edit";

  if(ownProps.location.pathname === "/upload"){
    formType = "upload"
  } else {
    formType = "edit"
  }

  return({formType, currentUser: state.session.currentUser})
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/upload" ? createVideo : updateVideo

  return({
    processVideoForm: (video) => dispatch(action(video))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm)
