class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: { credentials: ['invalid'] }, status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['Not Logged In'], status: 404
    end
  end
end
