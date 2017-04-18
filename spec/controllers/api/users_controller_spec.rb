require 'rails_helper'
require 'byebug'
RSpec.describe Api::UsersController, :type => :controller do
  describe "POST #create" do
    context "with invalid parameters" do
      it "validates the presence of the user's username and password" do
        post :create, user: {username: "concert_goer", password: ""}
        password_error = JSON.parse(response.body)
        expect(password_error['password']).to eq(["is too short (minimum is 6 characters)"])
      end

      it "validates that the password is at least 6 characters long" do
        post :create, user: {username: "concert_goer", password: "short"}
        password_error = JSON.parse(response.body)
        expect(password_error['password']).to eq(["is too short (minimum is 6 characters)"])
      end
    end
  end

    context "with valid parameters" do
      it "redirects user to links index on success" do
        post :create, user: {username: "concert_goer", password: "password"}, :format => :json
        expect(response).to render_template("show")
      end

      it "logs in the user" do
        post :create, user: {username: "concert_goer", password: "password"}, :format => :json
        user = User.find_by_username("concert_goer")

        expect(session[:session_token]).to eq(user.session_token)
      end
    end

end
