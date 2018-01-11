export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
import * as APIUtil from '../util/search_api_util';

export const receiveCategories = (query) => {
  return {
    type: RECEIVE_CATEGORIES,
    query
  };
};

export const searchCategories = (query) => dispatch => {

  return APIUtil.searchCategories(query).then( (results) => {

    return dispatch(receiveCategories(results));
  });
};
