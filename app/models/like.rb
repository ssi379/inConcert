class Like < ActiveRecord::Base

  validates :user, :video, presence: true

  belongs_to :user
  belongs_to :video
end
