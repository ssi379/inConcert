import { connect } from "react-redux";
import { createComment, deleteComment, updateComment, receiveErrors } from "../../../actions/comment_actions";
import CommentsIndex from "./comments_index";

export const mapStateToProps = ({video, session}) => ({

	currentUser: session.currentUser,
	video: video.currentVideo,
	comments: video.currentVideo.comments,
	errors: video.errors
});

export const mapDispatchToProps = dispatch => ({
	createComment: (comment) => dispatch(createComment(comment)),
	deleteComment: (id) => dispatch(deleteComment(id)),
	updateComment: (id) => dispatch(updateComment(id)),
	clearErrors: (array) => dispatch(receiveErrors(array))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentsIndex);
