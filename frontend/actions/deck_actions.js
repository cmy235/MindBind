import * as APIUtil from '../util/deck_api_util';

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

export const requestDeck = (deckId) => dispatch => {
  return APIUtil.fetchDeck(deckId).then ( (deck) => {
    return dispatch(receiveDeck(deck));
  });
};


export const requestDecks = () => dispatch => {
  return APIUtil.fetchDecks().then ( (decks) => {
    return dispatch(receiveAllDecks(decks));
  });
};
