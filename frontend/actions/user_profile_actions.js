import { fetchUser } from "../util/session_api_util";

export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUserProfile = userProfile => ({
	type: RECEIVE_USER_PROFILE,
	userProfile
});

export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors
});

export const fetchUserProfile = (id) => dispatch => {
	return fetchUser(id)
		.then(userProfile => dispatch(receiveUserProfile(userProfile)),
			err => dispatch(receiveErrors(err.responseJSON)));
};
