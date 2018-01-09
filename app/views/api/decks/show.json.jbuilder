json.deck do
  json.id @deck.id
  json.title @deck.title
end

json.cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.id card.id
      json.front card.front
      json.back card.back
    end
  end
end
