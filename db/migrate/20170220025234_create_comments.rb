class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
