import React from 'react';

export default class CommentEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {body: this.props.comment.body, id: this.props.comment.id}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  renderSubmit(){
    if(this.state.body.length > 0){
      return(
        <div>
          <input type="submit" id="edit-comment" value="Edit Comment"/>
          <br></br>
        </div>
      )
    } else {
      return (
        <div>
          <input type="submit" id="edit-comment-disabled" value="Edit Comment" disabled/>
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
    this.props.updateComment(comment).then(() => {
      this.setState({body: ""})
      this.props.toggleForm();
    });
  }

  render(){

    return(
      <div className="comment-form">

        <form onSubmit={this.handleSubmit}>
          <textarea id="comment-form-body"
            onChange={this.handleInput}
            value={this.state.body}/>

          {this.renderSubmit()}
        </form>
      </div>
    )
  }
}
