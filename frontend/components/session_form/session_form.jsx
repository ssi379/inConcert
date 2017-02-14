import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "Username",
          password: "Password"
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
 }

  handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     this.props.processForm(user);
  }

  render(){
    const { loggedIn, formType, errors, processForm } = this.props;

    const header = formType === 'signup' ? "Sign up" : "Log in";
    const linkRoute = formType === 'signup' ? "/login" : "/signup";
    const linkText = formType === 'signup' ? "Login" : "Signup";
    const linkPromptText = formType === 'signup' ? "Already have an account? " : "Don't have an account? "
    let errorMessages = [];
    if(errors.length > 0){
      errorMessages = errors.map( (error, idx) => {
        return <li key={idx}>{error}</li>
      });
    }


      if(!loggedIn){
        return (
          <div>
            <div id="session-form">
              <h1 className="session-form-header">{header} to inConcert</h1>

              <ul className="error-modal">
                {errorMessages}
              </ul>
              <form onSubmit={this.handleSubmit}>

                  <input className="session-input" id="username" type="text" onChange={this.handleInput} value={this.state.username}/>
                <br />
                  <input className="session-input" id="password" type="password" onChange={this.handleInput} value={this.state.password}/>
                <br />

                <input className="submit-session" type="submit" value={header} />
                <input className="submit-guest" type="submit" value="Guest Demo" />
                <h3 className="change-form">  {linkPromptText}<Link className="change-form-link" to={linkRoute}>{linkText}</Link></h3>
              </form>
            </div>
            <div className="modal-screen"></div>
          </div>
        )} else { return null; }
      }
    }
