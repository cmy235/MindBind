import { RECEIVE_CATEGORIES } from '../actions/search_action';
import  merge  from 'lodash/merge';

const searchReducer = (state = [], action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
  debugger
    return action.query;
    default:
      return state;
  }
};

export default searchReducer;
