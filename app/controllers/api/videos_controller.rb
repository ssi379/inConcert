class Api::VideosController < ApplicationController

  def create
    @video = Video.new(video_params)

    error_hash = {}
    error_hash["title"] = ["can't be blank"] if video_params["title"] == ""
    error_hash["description"] = ["can't be blank"] if video_params["description"] == ""

    if(error_hash.keys.length > 0)
      render json: error_hash, status: 422
    elsif @video.save
      render :show
    else
      render json: @video.errors, status: 422
    end
  end

  def index
    @videos = Video.includes(:user, :likes).search_videos(params)
    render :index
  end

  def show
    @video = Video.includes(likes: [:user, :video], comments: [:user]).find(params[:id])
    if @video
      @video.views += 1
      @video.save
      render :show
    else
      render json: @video.errors, status: 422
    end
  end

  def update

    @video = Video.find(params[:id])

    if @video.update_attributes(video_params)
      render :update
    else
      render json: @video.errors, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    render :destroy
  end


  private
  def video_params
    params.require(:video).permit(:title, :description, :user_id, :views, :videoitem, :thumbnail)
  end
end
