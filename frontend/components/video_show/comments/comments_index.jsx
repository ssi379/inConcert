import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

export default class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  renderCommentItems(){
    const { updateComment, deleteComment } = this.props;
    return this.props.comments.map((comment, idx) => {
      return <CommentItem key={`${this.props.video.id}-${idx}`}
              comment={comment}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}/>
    })
  }

  render(){

    return(
      <div>{this.renderCommentItems()}

        <CommentForm createComment={this.props.createComment} video={this.props.video}/>
      </div>

    )
  }
}
