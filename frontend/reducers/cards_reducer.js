import React from 'react';
import { RECEIVE_CARDS, RECEIVE_ALL_CARDS,
   REMOVE_CARD, RECEIVE_CARD } from '../actions/card_actions.js';
import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';

import  merge  from 'lodash/merge';


let newState;
const cardsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK:
      newState = Object.assign({}, state, action.cards);
      return newState;
    case RECEIVE_CARD:
      const card = action.card;
      const cardObject = {[card.id]: card};
      newState = Object.assign({}, state, cardObject);
      return newState;
    case REMOVE_CARD:
    debugger
      newState = Object.assign({}, state);
      delete newState[action.cardId];
      return newState;
    case RECEIVE_ALL_CARDS:
      return state;
    default:
      return state;
  }
};

export default cardsReducer;
