import React from 'react';
import CommentItem from './comment_item';

export default class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  renderCommentItems(){
    return this.props.comments.map((comment, idx) => {
      return <CommentItem key={`${this.props.video.id}-${idx}`} comment={comment}/>
    })
  }

  render(){

    return(
      <div>{this.renderCommentItems()}</div>
    )
  }
}
