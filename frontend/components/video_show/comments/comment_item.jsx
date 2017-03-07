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
    if(this.state.commentSettings){
      return(
        <div className="update-delete-settings">
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

  renderTimeAgo(){
    if(this.props.comment.comment_date){
      return(<TimeAgo className="comment-item-timeago" date={this.props.comment.comment_date} />);
    } else {
      return (<TimeAgo className="comment-item-timeago" date={Date.now()} minPeriod={30}/>)
    }
  }

  render(){

    const { comment } = this.props;
    return(
      <div className="comment-item" onMouseOver={this.showCommentSettings} onMouseOut={this.hideCommentSettings}>
        {this.renderCommentSettings()}
        <img className="commentor-avatar" src={comment.author.avatar_url}/>
        <div className="comment-body">
          <Link to={`/users/${comment.author.id}`} className="comment-author">{comment.author.username}</Link>
          {this.renderTimeAgo()}
          {this.renderEditModal()}



          <br />
          {this.renderDeleteModal()}
        </div>

      </div>
    )
  }
}
