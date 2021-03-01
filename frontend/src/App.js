import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Tasks } from './containers/Tasks';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { Profile } from './components/Profile';
import { SnackbarContextProvider } from './contexts/SnackbarContext';
import { SimpleSnackbar } from './containers/SimpleSnackbar';
import Nabvar from './components/Nabvar';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <Router>
      <SnackbarContextProvider>
        <AuthProvider>
          <Nabvar />
          <SimpleSnackbar />
            <Switch>
              <Route path='/signup' component={SignUp}/>
              <Route path='/login' component={LogIn}/>
              <PrivateRoute exact path='/' component={Tasks}/>
              <PrivateRoute exact path='/me' component={Profile}/>
            </Switch>
        </AuthProvider>
      </SnackbarContextProvider>
    </Router>
  );
}

export default App;
