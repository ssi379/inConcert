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
        <h4 className="comment-author">{comment.author.username}</h4>
        <p className="comment-body">{comment.body}</p>
      </div>
    )
  }
}
