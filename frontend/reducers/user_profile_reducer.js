import { RECEIVE_USER_PROFILE } from '../actions/user_profile_actions';
import merge from 'lodash/merge';
const defaultState = {
  userProfile: null
}

export default function userProfileReducer(oldState = defaultState, action){
  switch(action.type){
    case RECEIVE_USER_PROFILE:
      return merge({}, oldState, { userProfile: action.userProfile});
    default:
      return oldState;
  }
}
