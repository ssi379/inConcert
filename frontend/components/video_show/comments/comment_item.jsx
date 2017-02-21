import React from 'react';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      deleteModal: false
    })

    this.triggerDeleteModal = this.triggerDeleteModal.bind(this);
    this.removeDeleteModal = this.removeDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showCommentSettings(event){
    $(event.currentTarget).find('.update-delete-settings').css("display", "block")
  }

  hideCommentSettings(event){
    $(event.currentTarget).find('.update-delete-settings').css("display", "none")
  }

  triggerDeleteModal(){
    this.setState({deleteModal: true})
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
          <p className="comment-body">{comment.body}</p>


          <div className="update-delete-settings">
              <span className="comment-settings-item" id="edit-comment">Edit</span>
              <span className="comment-settings-item" id="delete-comment" onClick={this.triggerDeleteModal}>Delete</span>
          </div>
          <br />
          {this.renderDeleteModal()}
        </div>

      </div>
    )
  }
}
