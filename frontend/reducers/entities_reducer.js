import { combineReducers } from 'redux';
import deck from './deck_reducer';
import cards from './cards_reducer';

const entitiesReducer = combineReducers({
  deck,
  cards
});

export default entitiesReducer;
