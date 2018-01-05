class RemoveIndexFromDecks < ActiveRecord::Migration[5.1]
  def change
    remove_index :decks, :category_id
  end
end
