export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
import * as APIUtil from '../util/search_api_util';

export const receiveCategories = (query) => {
  return {
    type: RECEIVE_CATEGORIES,
    query
  };
};

export const searchCategories = (query) => dispatch => {
  debugger
  return APIUtil.searchCategories(query).then( (results) => {
    debugger
    return dispatch(receiveCategories(results));
  });
};
