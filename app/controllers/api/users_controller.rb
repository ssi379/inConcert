class Api::UsersController < ApplicationController
    def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(:videos, :liked_videos).find(params[:id])
    render :show
  end
end
