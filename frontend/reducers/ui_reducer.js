import merge from 'lodash/merge';
import { OPEN_MODAL1, OPEN_MODAL2, CLOSE_MODALS } from '../actions/ui_actions';

let initialState = {
  modal1: false,
  modal2: false
};

const uiReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_MODAL1:
      return Object.assign({}, state, {modal1: true});
    case OPEN_MODAL2:
      return Object.assign({}, state, {modal2: true});
    case CLOSE_MODALS:
      return Object.assign({}, state, {modal1: false, modal2: false});
    default:
      return state;
  }
};

export default uiReducer;
