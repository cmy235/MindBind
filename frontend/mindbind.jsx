
import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './components/root';
// import * as APIUtil from './actions/session_actions';
import * as ACTION from './actions/deck_actions';
import * as APIUtil from './util/deck_api_util';

import configureStore from './store/store';
import * as UIaction from './actions/ui_actions';


document.addEventListener('DOMContentLoaded', () => {
  // window.openModal1 = UIaction.openModal1;
  // window.openModal2 = UIaction.openModal2;
  // window.closeModals = UIaction.closeModals;
  // window.login = UIaction.login;
  // window.logout = UIaction.logout;
  // window.signup = UIaction.signup;
  // const store = configureStore();
  window.receiveDeck = ACTION.receiveDeck;
  window.fetchDecks = APIUtil.fetchDecks;
  window.fetchDeck = APIUtil.fetchDeck;
  
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
