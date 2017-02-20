import { connect } from 'react-redux';
import { fetchManyVideos, fetchSingleVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = ({video, session}, ownProps) => ({
  id: ownProps.params.id,
  currentUser: session.currentUser,
  video: video.currentVideo,
  listed_videos: video.listed_videos
});

const mapDispatchToProps = dispatch => ({
  fetchSingleVideo: (id) => dispatch(fetchSingleVideo(id)),
  fetchManyVideos: () => dispatch(fetchManyVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
