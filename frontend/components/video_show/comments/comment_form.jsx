import React from 'react';

export default class CommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {body: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render(){

    return(
      <div className="comment-form">
        <div className="current-commentor-info">
          <img className="current-commentor-avatar" src={this.props.currentUser.avatar_url} />
        </div>

        <form onSubmit={this.handleSubmit}>
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
