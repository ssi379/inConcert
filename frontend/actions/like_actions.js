import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveLike = (like) => ({
	type: RECEIVE_LIKE,
	like
});

export const removeLike = (like) => ({
	type: REMOVE_LIKE,
	like
});

export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors
});

export const createLike = (like) => dispatch => {
	return LikeAPIUtil.createLike(like)
		.then((like) => dispatch(receiveLike(like)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteLike = (id) => dispatch => {
	return LikeAPIUtil.deleteLike(id)
		.then((like) => dispatch(removeLike(like)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};
