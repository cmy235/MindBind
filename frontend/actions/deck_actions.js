import * as APIUtil from '../actions/deck_actions';

export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";

export const receiveAllDecks = (decks) => {
  return {
    type: RECEIVE_ALL_DECKS,
    decks: decks
  };
};

export const receiveDeck = (deck) => {
  return {
    type: RECEIVE_DECK,
    deck: deck
  };
};

export const requestDeck = (deckId) => {
  return APIUtil.fetchDeck(deckId).then ( (deck) => {
    return receiveDeck(deck);
  });
};


export const requestDecks = () => {
  return APIUtil.fetchDecks().then ( (decks) => {
    return receiveDecks(decks);
  });
};
