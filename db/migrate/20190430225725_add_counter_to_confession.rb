class AddCounterToConfession < ActiveRecord::Migration[5.2]
  def change
    add_column :confessions, :counter, :integer, default: 0
  end
end
