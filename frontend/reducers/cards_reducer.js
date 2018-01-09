import React from 'react';
import { RECEIVE_CARDS, RECEIVE_ALL_CARDS,
   REMOVE_CARD, RECEIVE_CARD } from '../actions/card_actions.js';
import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';
import  merge  from 'lodash/merge';

let initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECK:
      return merge({}, state, action.cards);
    case RECEIVE_CARD:
      const card = action.card;
      const cardObject = {[card.id]: card};
      newState = merge({}, state, deckObject);
      return newState;
    case RECEIVE_ALL_CARDS:
      // all cards of that deck_id
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
