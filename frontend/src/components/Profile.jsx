import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import styled from 'styled-components';

import { SnackbarContext } from '../contexts/SnackbarContext';
import { SNACK_COLOR } from '../SnackColor';

const CardWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 5px;
  text-align: center;
`;

export const Profile = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const { logOut, userState } = useAuth();
  const history = useHistory();
  const { toggleSnack } = useContext(SnackbarContext);

  const handleLogOut = async() => {
    setError('')
    try {
      setLoading(true)
      await logOut()
      toggleSnack(true, `${SNACK_COLOR.info}`, 'See you soon!')
      history.push('/login')
    } catch {
      setError('Failed to log out.')
      setLoading(false)
    }
  };

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <CardWrapper>
            <Card>
              <CardContent>
                <h2>Your Profile</h2>
                {error && <Alert severity="error">{error}</Alert>}
                {
                  userState.currentUser &&
                    <div>
                      <p>Email: {userState.currentUser.email}</p>
                      <ButtonWrapper>
                        <Button onClick={() => {history.push('/')}} variant="contained" color="primary">Go to your tasks</Button>
                      </ButtonWrapper>
                      <ButtonWrapper>
                        <Button disabled={loading} onClick={handleLogOut} variant="contained" color="secondary">Log Out</Button>
                      </ButtonWrapper>
                    </div>
                }
              </CardContent>
            </Card>
          </CardWrapper>
        </Grid>
      </Grid>
    </>
  )
};