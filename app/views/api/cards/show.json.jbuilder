# # json.partial! "api/cards/card", card: @card
#
#   json.front @card.front
#   json.back @card.back
#   json.id @card.id
#   json.deckId @card.deck


# card: card_object
json.card @card

# deck: deck
json.deck do
  json.extract! @card.deck, :id, :title, :author_id, :category_id
  json.cardIds @card.deck.card_ids
end
