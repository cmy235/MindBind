
import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './components/root';
import * as APIUtil from './actions/session_actions';
import configureStore from './store/store';
import * as UIaction from './actions/ui_actions';


document.addEventListener('DOMContentLoaded', () => {
  window.openModal1 = UIaction.openModal1;
  window.openModal2 = UIaction.openModal2;
  window.closeModals = UIaction.closeModals;
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;
  // window.signup = APIUtil.signup;
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // Testing below
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing above
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
