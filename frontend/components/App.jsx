import React from 'react';
import { Provider } from 'react-redux';
import {Route, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import UI_Container from './ui/ui_container';
import DecksIndexContainer from './decks/decks_index_container';


const App = () => (
  <div>
      <header>
        <GreetingContainer />
      </header>
      <Route exact path="/" component={UI_Container} />
      <Route exact path="/decks" component={DecksIndexContainer} />
 </div>
);

export default App;
