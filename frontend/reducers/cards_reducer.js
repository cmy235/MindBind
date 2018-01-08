import React from 'react';
import { RECEIVE_CARDS, RECEIVE_ALL_CARDS, REMOVE_CARD } from '../../actions/card_actions.js';

let initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      //
      return newState:

    case RECEIVE_ALL_CARDS:
      //
      return newState;
    default:
      return state;
  }

};

export default cardsReducer;
