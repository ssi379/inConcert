import React from 'react';

export default class CommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {body: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors([]);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors.length > 0){
      this.props.clearErrors([]);
    }

  }


  renderSubmit(){
    if(this.state.body.length > 0){
      return(
        <div>
          <input type="submit" id="add-comment" value="Add Comment"/>
          <br></br>
        </div>
      )
    } else {
      return (
        <div>
          <input type="submit" id="add-comment-disabled" value="Add Comment" disabled/>
          <br></br>
        </div>
      )
    }
  }

  handleInput(event){
   this.setState({ body : event.currentTarget.value });
  }

  handleSubmit(event){
    event.preventDefault();
    const comment = Object.assign({}, this.state);
    comment.user_id = this.props.currentUser.id;
    comment.video_id = this.props.video.id;
    this.props.createComment(comment).then(() => {
      this.setState({body: ""})
    });
  }

  renderErrors(){
    let errors = this.props.errors
    if(errors.length === 0){ return null }
    return(
      <ul className="error-message comment-form-error">
        {Object.keys(errors).map( (id, idx) => (
          <li key={`error-${idx}`}>{`${id.charAt(0).toUpperCase() + id.slice(1)} ${errors[id]}`}</li>
        ))}
        <br />
      </ul>

    );
  }

  render(){

    return(
      <div className="comment-form">
        <div className="current-commentor-info">
          <img className="current-commentor-avatar" src={this.props.currentUser.avatar_url} />
        </div>

        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <textarea id="comment-form-body"
            onChange={this.handleInput}
            value={this.state.body}
            placeholder="Click here to add a new comment"/>

          {this.renderSubmit()}
        </form>
      </div>
    )
  }
}
