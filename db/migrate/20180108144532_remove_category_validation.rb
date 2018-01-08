class RemoveCategoryValidation < ActiveRecord::Migration[5.1]
  def change
    remove_column :decks, :category_id, :integer
  end
end
