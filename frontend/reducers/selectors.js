import values from 'lodash/values';

export const selectAllDecks = state => values(state.entities.pokemon);

export const selectDeckCards = (state, deck) => {
  if (deck) {
    return deck.cards.map( cardId => state.entities.cards[cardId]);
  } else {
    return [];
  }
};

// cardId is an element in a deck's cards array
export const selectDeckSingleCard = (state, cardId) => {
  return state.entities.cards[cardId];
};

export const selectDeckCategory = (state, category_id) => {
  return state.entities.cards[cardId];
};

// for a deck we want to be able to select
// - its cards
// - its category
