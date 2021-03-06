json.deck do
  json.extract! @deck, :id, :title, :author_id, :category_id
  json.cardIds @deck.card_ids
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
