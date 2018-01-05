# json.decks @decks.each do |deck|
#   json.title deck.title
#   json.author_id deck.author_id
#   json.category_id deck.category_id
# end
@decks.each do |deck|
  json.set! deck.id do
    json.id deck.id
    json.title deck.title
    json.author_id deck.author_id
    json.category_id deck.category_id
  end
end
# // json.decks makes the key: pointing to title
# // json.set! deck.id will dynamically set the key for you, deck_id pointing
# to deck object

# // thats why we send an object back from Jbuilder
