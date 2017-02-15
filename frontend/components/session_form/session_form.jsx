import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "Username",
          password: "Password"
      };
      this.errorMessages = [];
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.exitForm = this.exitForm.bind(this);
  }
  handleInput(event){
   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
 }

 componentDidMount(){
   this.props.clearErrors([]);
 }

  handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     this.props.processForm(user);
  }

  exitForm(e){
    this.errorMessages = [];
    hashHistory.push("/");
  }

  renderErrors(){

    return(
      <ul>
        {this.props.errors.map( (error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render(){
    const { loggedIn, formType, errors, processForm } = this.props;

    const header = formType === 'signup' ? "Sign up" : "Log in";
    const linkRoute = formType === 'signup' ? "/login" : "/signup";
    const linkText = formType === 'signup' ? "Login" : "Signup";
    const linkPromptText = formType === 'signup' ? "Already have an account? " : "Don't have an account? "

    // if(Object.keys(errors).length > 0){
    //   this.errorMessages = Object.keys(errors).map( (id, idx) => {
    //     return <li className="error-modal" key={idx}>{errors[id]}</li>
    //   });
    // }


      if(!loggedIn){
        return (
          <div>
            <div id="session-form">
              <h1 className="session-form-header">{header} to inConcert</h1>
                {this.renderErrors()}

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
            <div className="modal-screen" onClick={this.exitForm}></div>
          </div>
        )} else { return null; }
      }
    }
