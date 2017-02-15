import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_ERRORS } from "../actions/video_actions";
import merge from 'lodash/merge';

const defaultVideoState = {
  currentVideo: null
}

const VideoReducer = (oldState = defaultVideoState, action) => {

  switch(action.type){
    case RECEIVE_VIDEO:
      return merge({}, oldState, {currentVideo: action.video});
    case RECEIVE_VIDEOS:
      return merge({}, oldState, action.videos);
    default:
      return oldState;
  }
}

export default VideoReducer;
