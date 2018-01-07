
class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :front, null: false
      t.string :back, null: false
      t.integer :deck_id, null: false
    end
    add_index :cards, :deck_id
  end
end
