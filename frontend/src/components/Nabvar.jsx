import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserMenu } from './UserMenu';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@material-ui/core';

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  &:visited { color: #fff; }
  &:focus { color: #fff; }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function Nabvar(props) {
  const { userState } = useAuth();
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">SimpleTaskNote</NavLink>
          </Typography>
          {
            userState.currentUser ?
              <UserMenu/>
            :
              <Button style={{textTransform: 'none'}}>
                <NavLink to='/login'>Login</NavLink>
              </Button>
          }
          
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

