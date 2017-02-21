import React from 'react';
import CommentEdit from './comment_edit';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      deleteModal: false,
      form: false
    })

    this.triggerDeleteModal = this.triggerDeleteModal.bind(this);
    this.removeDeleteModal = this.removeDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showCommentSettings = this.showCommentSettings.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  showCommentSettings(event){
    if(this.props.currentUser){
      if(this.props.currentUser.id === this.props.comment.user_id){
        $(event.currentTarget).find('.update-delete-settings').css("display", "block")
      }
    }
  }

  hideCommentSettings(event){
    $(event.currentTarget).find('.update-delete-settings').css("display", "none")
  }


  toggleForm() {
    this.setState({form: !this.state.form});
    this.setState({deleteModal: false});
  }

  renderEditModal(){
    const { comment, updateComment, commentEditForm, toggleCommentEdit } = this.props;
    if(this.state.form){
      return(
        <CommentEdit comment={comment} updateComment={updateComment} toggleForm={this.toggleForm} />
      )
    } else {
      return(
        <p className="comment-body">{comment.body}</p>
      )
    }
  }

  triggerDeleteModal(){
    this.setState({form: false})
    this.setState({deleteModal: true});
  }

  removeDeleteModal(){
    this.setState({deleteModal: false})
  }

  handleDelete(event){
    event.preventDefault();
    const { deleteComment } = this.props;
    deleteComment(this.props.comment.id);
  }


  renderDeleteModal(){
    if(this.state.deleteModal){
      return(
        <div className="delete-comment-confirm">
          <div className="delete-notification">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>Are you sure you want delete this comment permanently?</p>
          </div>
          <div className="delete-actions">
            <button id="delete-comment-confirm" onClick={this.handleDelete}>Delete comment</button>
            <button id="delete-comment-cancel" onClick={this.removeDeleteModal}>Cancel</button>
          </div>
        </div>
      )
    } else { return null }
  }

  render(){

    const { comment } = this.props;
    return(
      <div className="comment-item" onMouseOver={this.showCommentSettings} onMouseOut={this.hideCommentSettings}>
        <img className="commentor-avatar" src={comment.author.avatar_url}/>
        <div className="comment-body">
          <h4 className="comment-author">{comment.author.username}</h4>
          {this.renderEditModal()}


          <div className="update-delete-settings">
              <span className="comment-settings-item" id="edit-comment" onClick={this.toggleForm}>Edit</span>
              <span className="comment-settings-item" id="delete-comment" onClick={this.triggerDeleteModal}>Delete</span>
          </div>
          <br />
          {this.renderDeleteModal()}
        </div>

      </div>
    )
  }
}
