import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { searchVideos } from "../../../actions/video_actions";

const mapDispatchToProps = dispatch => ({
	searchVideos: (filter) => dispatch(searchVideos(filter))
});

export default connect(
	mapDispatchToProps
)(SearchBar);
