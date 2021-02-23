import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Tasks } from './containers/Tasks';
import { SnackbarContextProvider } from './contexts/SnackbarContext';
import { SimpleSnackbar } from './containers/SimpleSnackbar';

function App() {
  return (
    <SnackbarContextProvider>
      <SimpleSnackbar />
      <Router>
        <Switch>
          <Route exact path='/tasks' component={Tasks}/>
        </Switch>
      </Router>
    </SnackbarContextProvider>
  );
}

export default App;
