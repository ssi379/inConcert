require 'rails_helper'

begin
  Like
rescue
  Like = nil
end

RSpec.describe Like, :type => :model do
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:video) }
  it { should belong_to(:user) }
  it { should belong_to(:video) }
end
