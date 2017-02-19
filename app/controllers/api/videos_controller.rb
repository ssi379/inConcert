class Api::VideosController < ApplicationController

  def create
    @video = Video.new(video_params)

    if @video.save
      render :create
    else
      render json: @video.errors, status: 422
    end
  end

  def index
    @videos = Video.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
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
