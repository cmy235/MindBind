
# json.results @categories.each do |category|
#   json.category category
# end

json.categories @categories do |category|
  json.id category.id
  json.name category.name
  json.decks category.decks
end



# or

# --
# json.categories @categories do |category|
#   json.id category.id
#   json.name category.name
# end

# decks as its own object, so that categories and decks are siblings

# json.decks category.decks

# --
