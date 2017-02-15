# == Schema Information
#
# Table name: videos
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  description            :text             not null
#  user_id                :integer          not null
#  views                  :integer          default("1"), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  videoitem_file_name    :string
#  videoitem_content_type :string
#  videoitem_file_size    :integer
#  videoitem_updated_at   :datetime
#  thumbnail_file_name    :string
#  thumbnail_content_type :string
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#

class Video < ActiveRecord::Base

  has_attached_file :thumbnail, default_url: "default_thumbnail.png"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\Z/

  has_attached_file :videoitem, processors: [:transcoder]
  validates_attachment_content_type :videoitem, :content_type => /\Avideo\/.*\Z/

  validates :title, :description, :user_id, :views, presence: true

  belongs_to :user
end
