class CommentableColumns < ActiveRecord::Migration
  def change
    remove_column :comments, :video_id
    add_reference :comments, :commentable, polymorphic: true, index: true
  end
end
