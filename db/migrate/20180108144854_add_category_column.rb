class AddCategoryColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :decks, :category_id, :integer
  end
end
