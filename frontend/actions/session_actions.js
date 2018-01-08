
import * as APIUtil from '../util/session_api_util';



export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveErrors = (errors) => (
  {type: RECEIVE_ERRORS,
  errors}
);

export const receiveCurrentUser = (currentUser) => (
  {type: RECEIVE_CURRENT_USER,
  currentUser}
);

export const login = (user) => dispatch => {
  return APIUtil.login(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const signup = (user) => dispatch => {
  
  return APIUtil.signup(user).then( (user) => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const logout = () => dispatch => {
  return APIUtil.logout().then( () => {
    return dispatch(receiveCurrentUser(null));
  });
};
