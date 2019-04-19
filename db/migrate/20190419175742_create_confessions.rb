class CreateConfessions < ActiveRecord::Migration[5.2]
  def change
    create_table :confessions do |t|
      t.integer :user_id
      t.text :name
      t.text :gif_url

      t.timestamps
    end
  end
end
