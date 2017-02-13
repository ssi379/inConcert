import { connect } from "react-redux";
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = state => {
  return ({
    logout: () => dispatch(logout())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
