class Comment < ActiveRecord::Base

  validates :body, :user, :video, presence: true

  belongs_to :user
  belongs_to :video
end
