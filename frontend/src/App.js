import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Tasks } from './containers/Tasks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/tasks' component={Tasks}/>
      </Switch>
    </Router>
  );
}

export default App;
