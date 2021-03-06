import React, { useContext, useEffect, useReducer } from 'react';
import { fetchUser, signUpApi } from '../apis/Auth';
import { REQUEST_STATE } from '../constants';
import { auth } from '../firebase';

import { userReducer, initialState, userActionTypes } from '../reducers/userReducer';
 
export const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
};

export const AuthProvider = (props) => {

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logOut = () => {
    return auth.signOut()
  };

  const [userState, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch({type: userActionTypes.LODAING})
      console.log('userActionTypes.LODAING')
      if (user) {
        console.log('searching')
        const firebaseUser = user
        fetchUser(firebaseUser)
        .then(resp => {
          if (resp.status === 204) {
            console.log('userActionTypes.CREATE_LODAING')
            signUpApi(firebaseUser)
            .then(resp => {
              dispatch({
                type: userActionTypes.FETCH_SUCCESS,
                payload: {
                  user: resp.data.user
                }
              })
              console.log('CREATE_SUCCESS')
            })
          } else {
            dispatch({
              type: userActionTypes.FETCH_SUCCESS,
              payload: {
                user: resp.data.user
              }
            })
            console.log('userActionTypes.FETCH_SUCCESS')
          }
        })
      } else {
        dispatch({type: userActionTypes.NOT_AUTH})
        console.log('userActionTypes.NOT_AUTH')
      }
    })

    return unsubscribe
  }, [])

  const value = {
    signUp,
    logIn,
    logOut,
    userState
  }

  return (
    <AuthContext.Provider value={value}>
      {userState.fetchState === REQUEST_STATE.OK && props.children}
    </AuthContext.Provider>
  )
}