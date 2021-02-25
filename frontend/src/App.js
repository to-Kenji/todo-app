import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Tasks } from './containers/Tasks';
import { SnackbarContextProvider } from './contexts/SnackbarContext';
import { SimpleSnackbar } from './containers/SimpleSnackbar';
import Nabvar from './components/Nabvar';

function App() {
  return (
    <SnackbarContextProvider>
      <Router>
        <Nabvar />
        <SimpleSnackbar />
          <Switch>
            <Route exact path='/tasks' component={Tasks}/>
          </Switch>
      </Router>
    </SnackbarContextProvider>
  );
}

export default App;
