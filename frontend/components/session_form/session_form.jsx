import React from 'react';
import { Link, hashHistory } from 'react-router';
import VideoSplash from '../video_index/video_splash';

export default class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.errorMessages = [];
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.exitForm = this.exitForm.bind(this);
      this.handleGuest = this.handleGuest.bind(this);
  }
  handleInput(event){
   this.setState({ [event.currentTarget.id]: event.currentTarget.value });
 }

 componentDidMount(){
   this.props.clearErrors([]);
 }

 componentWillReceiveProps(nextProps){
   if(nextProps.location.pathname !== this.props.location.pathname){
      this.props.clearErrors([]);
   }
 }



  handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     let results = this.props.processForm(user).then(() => {
       hashHistory.push("/")
     })

  }

  exitForm(e){
    this.errorMessages = [];
    hashHistory.push("/");
  }

  handleGuest(e){
    e.preventDefault();
    e.persist();
    let that = this;
    const creds = { "username": "Demo", "password": "football" };
    let triggerGuest = () => { this.handleSubmit(e) };
    const fields = ["password", "username"];
    for(let i = 0; i < fields.length; i++){
      let currentField = fields[i];
      let inputArray = creds[currentField].split("");
      let that2 = that;

      while(inputArray.length > 0){
        let currentField2 = currentField.slice(0);
        let inputArray2 = inputArray.slice(0);
        let triggerGuest2 = triggerGuest;
        let that3 = that2;
        triggerGuest = () => {
          setTimeout(() =>{
            that3.setState({[currentField2]: inputArray2.join("")});
            triggerGuest2();
          }, 70);
        };

        inputArray.pop();
      }
    }
    triggerGuest();
  }

  renderErrors(){
    let errors = this.props.errors

    return(
      <ul>
        {Object.keys(errors).map( (id, idx) => (
          <li key={`error-${idx}`}>{`${id.charAt(0).toUpperCase() + id.slice(1)} ${errors[id]}`}</li>
        ))}
      </ul>
    );
  }

  renderGuestButton(){
    if(this.props.formType === 'signup'){
      return(null)
    } else {
      return(
        <input className="submit-guest" type="submit" value="Guest Demo" onClick={this.handleGuest} />
      )
    }
  }

  render(){
    const { loggedIn, formType, errors, processForm } = this.props;

    const header = formType === 'signup' ? "Sign up" : "Log in";
    const linkRoute = formType === 'signup' ? "/login" : "/signup";
    const linkText = formType === 'signup' ? "Login" : "Signup";
    const linkPromptText = formType === 'signup' ? "Already have an account? " : "Don't have an account? "

      if(!loggedIn){
        return (
          <div>
            <div id="session-form">
              <h1 className="session-form-header">{header} to inConcert</h1>
                {this.renderErrors()}

              <form onSubmit={this.handleSubmit}>

                  <input className="session-input" id="username" type="text" onChange={this.handleInput} value={this.state.username} placeholder="Username"/>
                <br />
                  <input className="session-input" id="password" type="password" onChange={this.handleInput} value={this.state.password} placeholder="Password"/>
                <br />

                <input className="submit-session" type="submit" value={header} />
                {this.renderGuestButton()}
                <h3 className="change-form">{linkPromptText}<Link className="change-form-link" to={linkRoute}>{linkText}</Link></h3>
              </form>
            </div>
            <div className="modal-screen" onClick={this.exitForm}></div>
          </div>
        )} else { return null; }
      }
    }
