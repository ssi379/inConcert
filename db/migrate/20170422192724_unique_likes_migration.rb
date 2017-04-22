class UniqueLikesMigration < ActiveRecord::Migration
  def change
    add_index :likes, [:user_id, :video_id], :unique => true
  end
end
