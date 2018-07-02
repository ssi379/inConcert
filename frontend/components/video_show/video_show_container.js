import { connect } from "react-redux";
import { fetchManyVideos, fetchSingleVideo, receiveErrors } from "../../actions/video_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import VideoShow from "./video_show";

const mapStateToProps = (state, ownProps) => {
	let currentUser = state.session.currentUser;
	let id = ownProps.params.id;
	let video = state.video.currentVideo;
	let listed_videos = state.video.listed_videos;
	let likedByCurrentUser = false;

	if(currentUser && video){

		let userDupLikes = video.likes.filter((like) => {
	     return like.video_id === video.id && like.user_id === currentUser.id;
		});

		if(userDupLikes.length > 0){
			likedByCurrentUser = true;
		}
    
	}

	return({currentUser, id, video, listed_videos, likedByCurrentUser});
};

const mapDispatchToProps = dispatch => ({
	fetchSingleVideo: (id) => dispatch(fetchSingleVideo(id)),
	fetchManyVideos: () => dispatch(fetchManyVideos()),
	createLike: (like) => dispatch(createLike(like)),
	deleteLike: (id) => dispatch(deleteLike(id)),
	clearErrors: (array) => dispatch(receiveErrors(array))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VideoShow);
