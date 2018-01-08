
json.card @card
json.deck do
  json.extract! @card.deck, :id, :name, :objective, :author_id, :category_id
end


#
# {
#   card: {
#
#   },
#
#   deck: {
#
#   }
# }
