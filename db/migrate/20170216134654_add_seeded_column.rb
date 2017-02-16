class AddSeededColumn < ActiveRecord::Migration
  def change
    add_column :videos, :seeded, :boolean, default: false
  end
end
