import values from 'lodash/values';

// decks in state to array
export const selectAllDecks = state => values(state.entities.decks);

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
