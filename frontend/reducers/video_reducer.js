import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_ERRORS } from "../actions/video_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT, TOGGLE_COMMENT_EDIT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const defaultVideoState = {
  currentVideo: null,
  errors: []
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
    case REMOVE_VIDEO:
      return newState;
    case RECEIVE_COMMENT:
      newState.currentVideo.comments.push(action.comment);
      return newState;
    case UPDATE_COMMENT:
      if(action.comment.commentable_type === "Comment"){
        let parentComment = newState.currentVideo.comments.find((obj) => {
          return obj.id === action.comment.commentable_id
        });

        let replyToReplace = parentComment.replies.find((obj) => {
          return obj.id === action.comment.id;
        });

        let replyToReplaceIdx = parentComment.replies.indexOf(replyToReplace);
        parentComment.replies[replyToReplaceIdx] = action.comment;
      } else {
        let commentToReplace = newState.currentVideo.comments.find((obj) => {
          return obj.id === action.comment.id
        });
        let commentToReplaceIdx = newState.currentVideo.comments.indexOf(commentToReplace);
        debugger
        newState.currentVideo.comments[commentToReplaceIdx] = action.comment;
        // newState.currentVideo.comments[commentToReplaceIdx].replies = action.comment.comments
      }
      return newState;
    case REMOVE_COMMENT:
      let commentToRemove = newState.currentVideo.comments.find((obj) => {
        return obj.id === action.comment.id
      });

      let commentIdx = newState.currentVideo.comments.indexOf(commentToRemove);
      newState.currentVideo.comments.splice(commentIdx, 1);
      return newState;
    case RECEIVE_LIKE:
      newState.currentVideo.likes.push(action.like);
      return newState;
    case REMOVE_LIKE:
      let likeIdx = newState.currentVideo.likes.indexOf(action.like);
      newState.currentVideo.likes.splice(likeIdx, 1);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
}

export default VideoReducer;
