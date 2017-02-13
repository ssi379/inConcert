import { connect } from 'react-redux';
import SessionForm from './session_form'
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  let formType;
  state.session.currentUser ? loggedIn = true : loggedIn = false;
  let errors = state.session.errors;

  if(ownProps.location.pathname === "/login"){
    formType = 'login'
  } else if(ownProps.location.pathname === "/signup") {
    formType = 'signup'
  }

  return { loggedIn, formType, errors }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/login" ? login : signup;

  return {
    processForm: user => dispatch(action(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
