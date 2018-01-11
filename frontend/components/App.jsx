import React from 'react';
import { Provider } from 'react-redux';
import {Route, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './navbar/navbar_container';
import UI_Container from './ui/ui_container';
import DecksIndexContainer from './decks/decks_index_container';
import DeckShowContainer from './decks/deck_show_container';


const App = () => (
  <div>
      <header>
        <NavbarContainer />
      </header>
      <Route exact path="/" component={UI_Container} />
      <Route path="/decks" component={DecksIndexContainer} />
      <Route path= "/decks/:deckId" component={DeckShowContainer} />

 </div>
);

export default App;
