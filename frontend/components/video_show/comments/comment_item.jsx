import React from 'react';
import CommentEdit from './comment_edit';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      deleteModal: false,
      form: false,
      commentSettings: false
    })

    this.triggerDeleteModal = this.triggerDeleteModal.bind(this);
    this.removeDeleteModal = this.removeDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showCommentSettings = this.showCommentSettings.bind(this);
    this.hideCommentSettings = this.hideCommentSettings.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  renderCommentSettings(){
    let settingsClassName = this.props.type === "Video" ? "parent-settings" : "reply-settings";
    if(this.state.commentSettings){
      return(
        <div className={`update-delete-settings ${settingsClassName}`}>
          <span className="comment-settings-item" id="edit-comment" onClick={this.toggleForm}>Edit</span>
          <span className="comment-settings-item" id="delete-comment" onClick={this.triggerDeleteModal}>Delete</span>
        </div>
      )
    } else {
      return null;
    }
  }

  showCommentSettings(event){
    if(this.props.currentUser){
      if(this.props.currentUser.id === this.props.comment.user_id){
        this.setState( {commentSettings: true } )
      }
    }
  }

  hideCommentSettings(event){
    if(event.relatedTarget){
      if(event.relatedTarget.className !== "comment-settings-item"){
        this.setState( { commentSettings: false } )
      }
    }
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
    deleteComment(this.props.comment.id)
    this.removeDeleteModal();
  }


  renderDeleteModal(){
    if(this.state.deleteModal){
      return(
        <div className="delete-comment-confirm-container">
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

  renderTimeAgo(){

    if(this.props.comment.comment_date){
      return(<TimeAgo className="comment-item-timeago" date={this.props.comment.comment_date} />);
    } else {
      return (<span className="comment-item-timeago">Just Now</span>)
    }
  }

  renderReplies(){
    const { updateComment, deleteComment } = this.props;

    if(this.props.replies){
      return (
        <div className="comment-replies">
          {this.props.replies.map((reply, idx) => {
            return <CommentItem key={`${this.props.comment.id}-${idx}`}
              comment={reply}
              type="Comment"
              replies={null}
              currentUser={this.props.currentUser}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}
              clearErrors={this.props.clearErrors}
              toggleCommentEdit={this.props.toggleCommentEdit}
              commentEditForm={this.props.commentEditForm}
              errors={this.props.errors}/>
          })
        }

      </div>);
    } else {
      return null;
    }
  }

  render(){

    const { comment, type } = this.props;

    if(type === "Video"){
      return(
        <div className="comment-item" onMouseOver={this.showCommentSettings} onMouseOut={this.hideCommentSettings}>
          {this.renderCommentSettings()}
          <img className="commentor-avatar" src={comment.author.comment_avatar_url}/>
          <div className="comment-body">
            <Link to={`/users/${comment.author.id}`} className="comment-author">{comment.author.username}</Link>
            {this.renderTimeAgo()}
            {this.renderEditModal()}

            <br />
            {this.renderDeleteModal()}
            {this.renderReplies()}
          </div>


        </div>
      )
    } else if(type === "Comment"){
      return(
        <div className="reply-item" onMouseOver={this.showCommentSettings} onMouseOut={this.hideCommentSettings}>
          <img className="reply-avatar" src={comment.author.comment_avatar_url}/>
          <div className="reply-body">
            {this.renderCommentSettings()}
            <Link to={`/users/${comment.author.id}`} className="reply-author">{comment.author.username}</Link>
            {this.renderTimeAgo()}
            {this.renderEditModal()}



            <br />
            {this.renderDeleteModal()}
          </div>
        </div>
      )
    }
  }
}
