import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';
import  merge  from 'lodash/merge';

let initialState = {};

let newState;
const deckReducer = (state = initialState, action) => {
  // 
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK:
      const deck = action.deck;
      const deckObject = {[deck.id]: deck};
      newState = merge({}, state, deckObject);
      return newState;
    case RECEIVE_ALL_DECKS:
      newState = merge({}, state, action.decks);
      return newState;
    default:
      return state;
  }

};

export default deckReducer;
