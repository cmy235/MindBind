
class Card < ApplicationRecord

  validates :front, :back, presence: true

  belongs_to :cards,
  primary_key: :id,
  foreign_key: :deck_id

end
