class RemoveIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :decks, :author_id
  end
end
