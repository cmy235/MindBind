# == Schema Information
#
# Table name: cards
#
#  id      :integer          not null, primary key
#  front   :string           not null
#  back    :string           not null
#  deck_id :integer          not null
#

class Card < ApplicationRecord

  validates :front, :back, presence: true

  belongs_to :deck,
  primary_key: :id,
  foreign_key: :deck_id

end
