import { connect } from 'react-redux';
import { createComment, deleteComment, updateComment } from '../../../actions/comment_actions';
import CommentsIndex from './comments_index';

export const mapStateToProps = ({video}) => ({
  video: video.currentVideo,
  comments: video.currentVideo.comments
})

export const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateComment: (id) => dispatch(updateComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex)
