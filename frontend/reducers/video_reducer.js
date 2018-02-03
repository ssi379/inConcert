import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_ERRORS } from "../actions/video_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT } from '../actions/comment_actions';
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
      if(action.comment.commentable_type === "Comment"){
        let parentComment = newState.currentVideo.comments.find((obj) => {
          return obj.id === action.comment.commentable_id
        });

        parentComment.replies.push(action.comment);
      } else{
        newState.currentVideo.comments.push(action.comment);
      }
      return newState;
    case UPDATE_COMMENT:
      if(action.comment.commentable_type === "Comment"){
        let parentComment = newState.currentVideo.comments.find((obj) => {
          return obj.id === action.comment.commentable_id
        });

        let replyToReplaceIdx;

        parentComment.replies.find((obj, idx) => {
          if(obj.id === action.comment.id){
            replyToReplaceIdx = idx;
          };
        });

        parentComment.replies[replyToReplaceIdx] = action.comment;
      } else {
        let commentToReplaceIdx;

        newState.currentVideo.comments.find((obj, idx) => {
          if(obj.id === action.comment.id){
            commentToReplaceIdx = idx;
          }
        });

        newState.currentVideo.comments[commentToReplaceIdx] = action.comment;
      }
      return newState;
    case REMOVE_COMMENT:
      if(action.comment.commentable_type === "Comment"){
        let parentComment = newState.currentVideo.comments.find((obj) => {
          return obj.id === action.comment.commentable_id
        });

        let replyToRemoveIdx;

        parentComment.replies.find((obj, idx) => {
          if(obj.id === action.comment.id){
            replyToRemoveIdx = idx;
          };
        });

        parentComment.replies.splice(replyToRemoveIdx, 1);
      } else {
        let commentToRemoveIdx;

        newState.currentVideo.comments.find((obj, idx) => {
          if(obj.id === action.comment.id){
            commentToRemoveIdx = idx;
          }
        });

        newState.currentVideo.comments.splice(commentToRemoveIdx, 1);
      }
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
