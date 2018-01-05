

export const fetchDecks = () => {
  return $.ajax({
    url: 'api/decks',
    method: 'get'
  });
};


export const fetchDeck = (deckId) => {
  return $.ajax({
    url: `api/decks/${deckId}`,
    method: 'get'
  });
};
