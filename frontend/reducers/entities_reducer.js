import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';
import cardsReducer from './cards_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  deck: deckReducer,
  cards: cardsReducer,
  query: searchReducer
});

export default entitiesReducer;
