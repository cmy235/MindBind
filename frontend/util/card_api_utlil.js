
export const addCard = (card) => {
  return $.ajax({
    url: `api/decks/${card.deck_id}/cards`,
    mathod: "post",
    data: { card }
  });
};


export const editCard = (card) => {
  return $.ajax({
    url: `api/decks/${card.deck_id}/cards`,
    mathod: "post",
    data: { card }
  });
};


export const deleteCard = (card) => {
  return $.ajax({
    url: `api/decks/${card.deck_id}/${card.id}`,
    mathod: "delete"
  });
};


export const fetchCard = (card) => {
  return $.ajax({
    url: `api/decks/${card.deck_id}/cards`,
    mathod: "get"
  });
};


export const fetchCards = (deckId) => {
  return $.ajax({
    url: `api/decks/${deckId}/cards`,
    mathod: "get"
  });
};
