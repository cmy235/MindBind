
class Category < ApplicationRecord
  has_many :decks,
  primary_key: :id,
  foreign_key: :category_id

end
