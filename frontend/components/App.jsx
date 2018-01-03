import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <header>
        <GreetingContainer />
     </header>
     <AuthRoute path="/login" component={SessionFormContainer} />
     <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
