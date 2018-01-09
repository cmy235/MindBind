

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

export const addDeck = (deck) => {
  return $.ajax({
    url: 'api/decks',
    method: 'post',
    data: {deck: deck}
  });
};


export const removeDeck = (deckId) => {
  return $.ajax({
    url: `api/decks/${deckId}`,
    method: 'delete'
  });
};
