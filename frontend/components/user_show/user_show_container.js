import { connect } from "react-redux";
import { fetchUserProfile } from "../../actions/user_profile_actions";
import UserShow from "./user_show";


export const mapStateToProps = ({profile}) => ({
	profile: profile.userProfile
});

export const mapDispatchToProps = dispatch => ({
	fetchUserProfile: (id) => dispatch(fetchUserProfile(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserShow);
