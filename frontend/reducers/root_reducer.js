import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import VideoReducer from "./video_reducer";
import userProfileReducer from "./user_profile_reducer";

const rootReducer = combineReducers({
	session: SessionReducer,
	video: VideoReducer,
	profile: userProfileReducer
});

export default rootReducer;
