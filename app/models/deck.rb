# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  category_id :integer          not null
#

class Deck < ApplicationRecord

validates :title, :author, :category, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :author_id

# belongs_to: :category,
# primary_key: :id,
# foreign_key: :category_id


end
