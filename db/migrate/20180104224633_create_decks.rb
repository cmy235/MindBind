class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false
    end
    add_index :decks, :author_id, unique: true
    add_index :decks, :category_id, unique: true
  end
end
