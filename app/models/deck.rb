# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  category_id :integer
#

class Deck < ApplicationRecord

validates :title, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :author_id

has_many :cards,
primary_key: :id,
foreign_key: :deck_id

# belongs_to :category,
# primary_key: :id,
# foreign_key: :category_id


end
