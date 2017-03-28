import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

export default class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }


  renderCommentItems(){
    const { currentUser, video, comments, errors, updateComment, deleteComment, clearErrors, createComment } = this.props;

    return comments.map((comment, idx) => {
      return <CommentItem key={`${this.props.video.id}-${idx}`}
              comment={comment}
              type={"Video"}
              replies={comment.replies}
              currentUser={currentUser}
              updateComment={updateComment}
              deleteComment={deleteComment}
              clearErrors={clearErrors}
              createComment={createComment}
              clearErrors={clearErrors}
              currentUser ={currentUser}
              errors={errors}/>
    })
  }

  renderCommentForm(){
    const { video, errors, currentUser, createComment, clearErrors } = this.props;
    if(currentUser){
      return(
        <CommentForm currentUser={currentUser}
          type={"Video"}
          createComment={createComment}
          video={video}
          errors={errors}
          clearErrors={clearErrors}/>
      )
    } else {
      return null
    }
  }

  render(){

    return(
      <div>{this.renderCommentItems()}
        {this.renderCommentForm()}
      </div>

    )
  }
}
