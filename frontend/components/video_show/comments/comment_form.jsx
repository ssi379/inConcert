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
    const buttonText = this.props.type === "Video" ? "Add Comment" : "Add Reply";
    if(this.state.body.length > 0){
      return(
        <div>
          <input type="submit" className="add-comment" value={buttonText}/>
          <br></br>
        </div>
      )
    } else {
      return (
        <div>
          <input type="submit" className="add-comment-disabled" value={buttonText} disabled/>
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
    comment.commentable_id = this.props.type === "Video" ? this.props.video.id : this.props.comment.id;
    comment.commentable_type = this.props.type;
    this.props.createComment(comment).then(() => {
      this.setState({body: ""});
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
    const placeholderText = this.props.type === "Video" ? "Click here to add a new comment" : "Reply to this comment";
    let commentorAvatar
    if(this.props.type === "Video"){
      commentorAvatar = (
        <div className="current-commentor-info">
          <img className="current-commentor-avatar" src={this.props.currentUser.comment_avatar_url} />
        </div>
      )
    } else {
      commentorAvatar = null;
    }

    return(
      <div className="comment-form">
        {commentorAvatar}

        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <textarea className="comment-form-body"
            onChange={this.handleInput}
            value={this.state.body}
            placeholder={placeholderText}/>

          {this.renderSubmit()}
        </form>
      </div>
    )
  }
}
