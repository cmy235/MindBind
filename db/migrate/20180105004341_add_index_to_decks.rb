class AddIndexToDecks < ActiveRecord::Migration[5.1]
  def change
    add_index :decks, [:category_id, :author_id]
  end
end
