require 'rails_helper'

begin
  Video
rescue
  Video = nil
end

RSpec.describe Video, :type => :model do


  describe "Video::search_videos" do
    it "searches for videos by title" do
      Video.create!(title: "Sun", description: "testing", videoitem: "test", "thumbnail": "test", user_id: 1)
    end
  end

  it { should have_attached_file(:thumbnail) }
  it { should validate_attachment_content_type(:thumbnail).
              allowing('image/png', 'image/gif', 'image/jpg').
              rejecting('text/plain', 'text/xml', 'video/mp4', 'video/quicktime' ) }

  it { should have_attached_file(:videoitem) }
  it { should validate_attachment_content_type(:videoitem).
              allowing('video/mp4', 'video/quicktime').
              rejecting('text/plain', 'text/xml', 'image/png', 'image/gif', 'image/jpeg') }


  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:views) }
  it { should validate_presence_of(:videoitem) }
  it { should validate_presence_of(:thumbnail) }
  it { should belong_to(:user) }
  it { should have_many(:comments) }
  it { should have_many(:likes) }
end
