import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';
import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import  merge  from 'lodash/merge';

let newState;
const deckReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CARD:
    case RECEIVE_CARD:
    case RECEIVE_DECK:
      newState = Object.assign({}, state, {[action.deck.id]: action.deck});

      return newState;
    case RECEIVE_ALL_DECKS:

      newState = Object.assign({}, state, action.decks);
      return newState;
    default:
      return state;
  }

};

export default deckReducer;
