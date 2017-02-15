import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

export default function sessionReducer(oldState = defaultState, action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      let newState = merge({}, oldState)
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
}
