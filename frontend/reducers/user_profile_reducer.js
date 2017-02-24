import { RECEIVE_USER_PROFILE } from '../actions/user_profile_actions';
import merge from 'lodash/merge';
const defaultState = {
  userProfile: null
}

export default function userProfileReducer(oldState = defaultState, action){
  switch(action.type){
    case RECEIVE_USER_PROFILE:
      let newState = merge({}, oldState, { userProfile: action.userProfile});
      newState.userProfile.videos = action.userProfile.videos;
      newState.userProfile.liked_videos = action.userProfile.liked_videos
      return newState;
    default:
      return oldState;
  }
}
