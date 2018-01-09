import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";

import  merge  from 'lodash/merge';

export const receiveAllDecks = (decks) => {
  return {
    type: RECEIVE_ALL_DECKS,
    decks: decks
  };
};

export const receiveDeck = ({cards, deck}) => {
  return {
    type: RECEIVE_DECK,
    deck: deck,
    cards: cards
  };
};

export const requestDeck = (deckId) => dispatch => {
  return APIUtil.fetchDeck(deckId).then ( (payload) => {
    return dispatch(receiveDeck(payload));
  });
};

export const requestDecks = () => dispatch => {
  return APIUtil.fetchDecks().then ( (decks) => {
    return dispatch(receiveAllDecks(decks));
  });
};

export const addDeck = (deck) => dispatch => {
  return APIUtil.addDeck(deck).then ( (deck) => {
    return dispatch(receiveDeck(deck));
  });
};

export const removeDeck = (deck) => dispatch => {
  return APIUtil.removeDeck(deck).then ( () => {
    return dispatch(receiveDeck());
  });
};
