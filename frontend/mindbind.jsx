
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;
  // window.signup = APIUtil.signup;
  const store = configureStore();
  // Testing below
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing above
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

});
