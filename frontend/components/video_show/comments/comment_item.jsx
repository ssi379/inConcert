import React from 'react';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const { comment } = this.props;
    return(
      <div className="comment-item">
        <img className="commentor-avatar" src={comment.author.avatar_url}/>
        <div className="comment-body">
          <h4 className="comment-author">{comment.author.username}</h4>
          <p className="comment-body">{comment.body}</p>

          <div className="update-delete-settings">
              <span className="comment-settings-item" id="edit-comment">Edit</span>
              <span className="comment-settings-item" id="delete-comment">Delete</span>
          </div>
        </div>
      </div>
    )
  }
}
