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
  validates_attachment_content_type :videoitem, :content_type => ["video/quicktime", "video/mp4"]

  validates :title, :description, :user_id, :views, :videoitem, :thumbnail, presence: true

  belongs_to :user
  has_many :comments
  has_many :likes

  def self.destroy_nonseeds
    destroy_these_ids = []
    destroy_these_videos = Video.select(:id).where(seeded: false)

    destroy_these_videos.each do |video|
      destroy_these_ids << video.id
    end

    Video.destroy(destroy_these_ids)
  end

  def self.search_videos(filter)

    if filter[:query]
      search_strings = filter[:query].split(" ").map { |string| "%#{string}%" }
      where_string = ""
      search_string_array = []
      while search_strings.length > 0
        where_string = where_string + " OR " if where_string.length > 0
        string = search_strings.pop
        where_string = where_string + "UPPER(title) LIKE UPPER(?)"
        search_string_array << string
      end

      query = Video.where(where_string, *search_string_array).includes(:user)
    else
      query = Video.where(seeded: true)
    end

    query
  end


end
