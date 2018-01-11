
export const addCard = (card) => {

  return $.ajax({
    url: "api/cards",
    method: "post",
    data: {card}
  });
};


export const editCard = (card) => {
  return $.ajax({
    url: `api/cards/${deckId}/cards`,
    method: "post",
    data: { card }
  });
};


export const removeCard = (cardId) => {
  debugger
  return $.ajax({
    url: `api/cards/${cardId}`,
    method: "delete"
  });
};


export const fetchCard = (card) => {
  return $.ajax({
    url: `api/cards/${card.deck_id}/cards`,
    method: "get"
  });
};


export const fetchCards = (deckId) => {
  return $.ajax({
    url: `api/cards/${deckId}/cards`,
    method: "get"
  });
};
