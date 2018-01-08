@cards.each do |card|
  json.set! deck.id do
    json.id card.id
    json.front card.front
    json.back card.back
    json.deck_id card.deck_id
  end
end
