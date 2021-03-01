import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        return state.currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }}
    >
    </Route>
  )
};