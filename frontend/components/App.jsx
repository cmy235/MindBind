import React from 'react';
import { Provider } from 'react-redux';
import {Route, HashRouterm } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './navbar/navbar_container';
import UI_Container from './ui/ui_container';
import DecksIndexContainer from './decks/decks_index_container';
import DeckShowContainer from './decks/deck_show_container';
import SearchContainer from './search/search_container';
import CardShowContainer from './cards/card_show_container';


const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Route exact path="/" component={UI_Container} />
    <ProtectedRoute path="/decks" component={DecksIndexContainer} />
    <ProtectedRoute path= "/decks/:deckId" component={DeckShowContainer} />
    <Route path= "/cards/:cardId" component={CardShowContainer} />
    <Route path="/search" component={SearchContainer} />
  </div>
);

export default App;
