import { combineReducers } from 'redux';
import decks from './deck_reducer';

const entitiesReducer = combineReducers({
  decks
});

export default entitiesReducer;
