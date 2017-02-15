class AddAttachmentVideoitemToVideos < ActiveRecord::Migration
  def self.up
    change_table :videos do |t|
      t.attachment :videoitem
    end
  end

  def self.down
    remove_attachment :videos, :videoitem
  end
end
