import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_ERRORS } from "../actions/video_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT, TOGGLE_COMMENT_EDIT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const defaultVideoState = {
  currentVideo: null,
}

const VideoReducer = (oldState = defaultVideoState, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_VIDEO:
      newState.currentVideo = action.video;
      newState.currentVideo.comments = action.video.comments
      return newState;
    case RECEIVE_VIDEOS:
      newState.listed_videos = action.videos.listed_videos;
      return newState;
    case RECEIVE_COMMENT:
      newState.currentVideo.comments.push(action.comment);
      return newState;
    case UPDATE_COMMENT:
      let commentToReplace= $.grep(newState.currentVideo.comments, function(e){ return e.id === action.comment.id; })[0];
      let commentToReplaceIdx = newState.currentVideo.comments.indexOf(commentToReplace);
      newState.currentVideo.comments[commentToReplaceIdx] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      let idx = newState.currentVideo.comments.indexOf(action.comment);
      newState.currentVideo.comments.splice(idx, 1);
      return newState;
    default:
      return oldState;
  }
}

export default VideoReducer;
