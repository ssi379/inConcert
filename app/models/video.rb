# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  views       :integer          default("1"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ActiveRecord::Base
  validates :title, :description, :user_id, :views, presence: true

  has_attached_file :thumbnail
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_attached_file :video, processors: [:transcoder]
  validates_attachment_content_type :video, :content_type => /\Avideo\/.*\Z/

  belongs_to :user
end
