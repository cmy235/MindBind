import { RECEIVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions';
import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import  merge  from 'lodash/merge';

// jbuilder or default cards: [] ?
// cards reducer necessary? YES
// must structure cards preoperly in jbuilder:
// card obj, deck obj both inside {}

// let initialState = {
//   deckId: {
//     cardIds: []
//   }
// };

let initialState = {};

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

      // take action.card
      // looks at deckId
      // THIS WORKED BELOW
      // const deckId = action.deck.id;
      // SO DOES THIS, WEIRDLY
      // const deckId = action.card.deck_id;
      const deckId = action.payload.card.deck_id;

      // then key into deck in the state
      // THIS WORKED BELOW
      // let newDeck = Object.assign({}, state[deckId].cardIds);
      let newDeck = Object.assign({}, deck, {[deckIds]: action.payload.deck.cardIds});

      // grab that deck with the proper deckId
      // push cardsId into deck's cardIds array
      return newDeck;
    case RECEIVE_DECK:
    
      const deck = Object.assign({}, action.deck);
      const cardIds = action.cards ? Object.keys(action.cards) : [];
      deck.cardIds = cardIds;
      // const deck = action.deck;
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
