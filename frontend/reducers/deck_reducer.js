import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';
import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import  merge  from 'lodash/merge';

// jbuilder or default cards: [] ?
// cards reducer necessary? YES
// must structure cards preoperly in jbuilder:
// card obj, deck obj both inside {}

let initialState = {
  deckId: {
    cardIds: []
  }
};

let newState;
const deckReducer = (state = initialState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CARD:
      // let cards = action.deck.cardIds;
      // let cardToDelete = action.card;
      // cards = cards.delete(cardToDelete);
      // // return { deck: cardIds?};
    case RECEIVE_CARD:
      // just merging the deck, so it's the same as below
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
