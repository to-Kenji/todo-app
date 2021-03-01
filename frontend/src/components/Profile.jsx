import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';

import Alert from '@material-ui/lab/Alert';

export const Profile = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const { logOut, userState } = useAuth();
  const history = useHistory();

  const handleLogOut = async() => {
    setError('')
    try {
      setLoading(true)
      await logOut()
      history.push('/login')
    } catch {
      setError('Failed to log out.')
      setLoading(false)
    }
  };

  const Check = () => {
    console.log(userState.currentUser)
  }
  return (
    <>
      <p>This is the Profile page</p>
      {error && <Alert severity="error">{error}</Alert>}
      {
        userState.currentUser &&
          <div>
            <p>EMAIL: {userState.currentUser.email}</p>
            <p>uid: {userState.currentUser.uid}</p>
            <Button disabled={loading} onClick={handleLogOut} variant="contained" color="primary">Log Out</Button>
            <Button onClick={Check} variant="contained" color="primary">check</Button>
          </div>
      }
    </>
  )
};