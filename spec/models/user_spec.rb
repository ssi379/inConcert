require 'rails_helper'
begin
  User
rescue
  User = nil
end

RSpec.describe User, :type => :model do

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "concert_goer", password: "qwerty")
      user = User.find_by_username("concert_goer")
      expect(user.password).not_to be("qwerty")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "concert_goer", password: "qwerty")
    end
  end

  describe "session token" do
    it "assigns a session_token if one is not given" do
      user = User.create(username: "concert_goer", password: "qwerty")
      expect(user.session_token).not_to be_nil
    end
  end

  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:username) }
  it { should have_db_index(:username).unique(:true) }
  it { should validate_presence_of(:password_digest) }
  it { should have_many(:videos) }
  it { should have_many(:likes) }
end
