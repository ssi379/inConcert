import { connect } from "react-redux";
import SearchResults from "./search_results";
import { searchVideos } from "../../../actions/video_actions";

const mapStateToProps = state => ({
	searchResults: state.video.listed_videos
});

const mapDispatchToProps = dispatch => ({
	searchVideos: (filter) => dispatch(searchVideos(filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
