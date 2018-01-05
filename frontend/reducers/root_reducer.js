import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import deck from './deck_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  deck
});

export default rootReducer;
