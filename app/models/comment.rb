class Comment < ActiveRecord::Base

  validates :body, :user, :commentable_id, presence: true

  belongs_to :user
  belongs_to :commentable, :polymorphic => true
  has_many :comments, :as => :commentable, :dependent => :delete_all
end
