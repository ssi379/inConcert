import * as VideoAPIUtil from "../util/video_api_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveVideo = (video) => ({
	type: RECEIVE_VIDEO,
	video
});

export const receiveVideos = (videos) => ({
	type: RECEIVE_VIDEOS,
	videos
});

export const removeVideo = video => ({
	type: REMOVE_VIDEO,
	video
});

export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors
});

export const searchVideos = (filter) => dispatch => {
	return VideoAPIUtil.searchVideos(filter)
		.then((videos) => dispatch(receiveVideos(videos)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchManyVideos = () => dispatch => {
	return VideoAPIUtil.fetchVideos()
		.then((videos) => dispatch(receiveVideos(videos)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchSingleVideo = (id) => dispatch => {
	return VideoAPIUtil.fetchVideo(id)
		.then((video) => dispatch(receiveVideo(video)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const processVideoForm = (formData, id) => dispatch => {
	return VideoAPIUtil.processVideoForm(formData, id)
		.then((video) => dispatch(receiveVideo(video)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const updateVideo = (id) => dispatch => {
	return VideoAPIUtil.updateVideo(id)
		.then((video) => dispatch(receiveVideo(video)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteVideo = (id) => dispatch => {
	return VideoAPIUtil.deleteVideo(id)
		.then((video) => dispatch(removeVideo(video)),
			(err) => dispatch(receiveErrors(err.responseJSON)));
};
