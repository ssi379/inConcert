import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
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

    const header = formType === 'signup' ? "Sign Up" : "Log In";
    const linkRoute = formType === 'signup' ? "/login" : "/signup";
    const linkText = formType === 'signup' ? "Login" : "Signup";
    let errorMessages = [];
    if(errors.length > 0){
      errorMessages = errors.map( (error, idx) => {
        return <li key={idx}>{error}</li>
      });
    }


      if(!loggedIn){
        return (
          <div id="session-form">
            <h1>{header}</h1>
            <h3><Link to={linkRoute}>{linkText}</Link></h3>
            <ul className="error-modal">
              {errorMessages}
            </ul>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username
                <input id="username" type="text" onChange={this.handleInput}/>
              </label>
              <br />

              <label>
                Password
                <input id="password" type="password" onChange={this.handleInput}/>
              </label>
              <br />

              <input type="submit" value="Submit" />
            </form>
          </div>
        )} else { return null; }
      }
    }
