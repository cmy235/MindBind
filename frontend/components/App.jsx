import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
  <div>
      <header>
        <h1>Connor's MindBind App</h1>
        <GreetingContainer />
     </header>
  </div>
);

export default App;
