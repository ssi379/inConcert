import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import VideoReducer from './video_reducer'

const rootReducer = combineReducers({
  session: SessionReducer,
  video: VideoReducer
});

export default rootReducer;
