import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_ERRORS } from "../actions/video_actions";
import merge from 'lodash/merge';

const defaultVideoState = {
  currentVideo: null
}

const VideoReducer = (oldState = defaultVideoState, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_VIDEO:
      newState.currentVideo = action.video;
      return newState;
    case RECEIVE_VIDEOS:
      newState.listed_videos = action.videos.listed_videos;
      return newState;
    default:
      return oldState;
  }
}

export default VideoReducer;
