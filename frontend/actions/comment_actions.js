import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const receiveComment = (comment) => ({
	type: RECEIVE_COMMENT,
	comment
});

export const receiveUpdatedComment = (comment) => ({
	type: UPDATE_COMMENT,
	comment
});

export const removeComment = (comment) => ({
	type: REMOVE_COMMENT,
	comment
});


export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors
});

export const createComment = (comment) => dispatch => {
	return CommentAPIUtil.createComment(comment)
		.then((comment) => dispatch(receiveComment(comment)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteComment = (id) => dispatch => {
	return CommentAPIUtil.deleteComment(id)
		.then((comment) => dispatch(removeComment(comment)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const updateComment = (id) => dispatch => {
	return CommentAPIUtil.updateComment(id)
		.then((comment) => dispatch(receiveUpdatedComment(comment)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};
