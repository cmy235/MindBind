import merge from 'lodash/merge';

export const OPEN_MODAL1 = "OPEN_MODAL1";
export const OPEN_MODAL2 = "OPEN_MODAL2";

const initialState = {
  modal1: false,
  modal2: false
};

const uiReducer = (initialState, action){
  switch (action.type) {
    case OPEN_MODAL1:
      return Object.assign({}, state, {modal1: true});
    case OPEN_MODAL2:
      return Object.assign({}, state, {modal2: true});
    default:
      return initialState;
  }
}

export default uiReducer;
