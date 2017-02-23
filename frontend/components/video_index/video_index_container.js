import { connect } from 'react-redux';
import { fetchManyVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = ({video}) => {
  let listed_videos = video.listed_videos;
  
  return { listed_videos }
};


const mapDispatchToProps = dispatch => ({
  fetchManyVideos: () => dispatch(fetchManyVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex)
