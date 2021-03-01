import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useAuth } from '../contexts/AuthContext';

const CardWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  margin-bottom: 30px;
`;

const LabelWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { logIn, state } = useAuth();
  const history = useHistory();

  async function handleLogIn(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await logIn(email, password)
      history.push('/')
    } catch {
      setError('Failed to log in.')
      setLoading(false);
    }
  };

  const Check = () => {
    console.log(state.currentUser)
  }

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={5}>
        <CardWrapper>
          <Card>
            <CardContent>
              <h2>Log In</h2>
              {error && <Alert severity="error">{error}</Alert>}
              <Grid container justify="center">
                <Grid item xs={9}>
                  <form onSubmit={handleLogIn}>
                    <FormWrapper>
                      <FormGroup>
                        <FormControl>
                          <InputLabel htmlFor="email">
                            <LabelWrapper>
                              <MailIcon style={{marginRight: "5px"}}/>
                              <span>Email</span>
                            </LabelWrapper>
                          </InputLabel>
                          <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </FormControl>
                      </FormGroup>
                    </FormWrapper>
                    <FormWrapper>
                      <FormGroup>
                        <FormControl>
                          <InputLabel htmlFor="password">
                            <LabelWrapper>
                              <LockIcon style={{marginRight: "5px"}}/>
                              <span>Password</span>
                            </LabelWrapper>
                          </InputLabel>
                          <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                        </FormControl>
                      </FormGroup>
                    </FormWrapper>
                    <Button type="submit" disabled={loading} variant="contained" color="primary">Log In</Button>
                  </form>
                  <p>Need an account?</p>
                  <Link to="/signup" style={{textDecoration: "none"}}>
                    <strong>Please Sign up.</strong>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </CardWrapper>
        <Button onClick={Check} variant="contained" color="primary">check</Button>
      </Grid>
    </Grid>
  );
};