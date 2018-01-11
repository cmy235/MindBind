import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';
import cardsReducer from './cards_reducer';

const entitiesReducer = combineReducers({
  deck: deckReducer,
  cards: cardsReducer
});

export default entitiesReducer;
