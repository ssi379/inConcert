class Api::CommentsController < ApplicationController


  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :create
    else
      render json: @comment.errors, status: 422
    end

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :destroy
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      render :update
    else
      render json: @comment.errors, status: 422
    end

  end


  private
  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type, :user_id, :body)
  end
end
