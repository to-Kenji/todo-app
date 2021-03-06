import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { SnackbarContext } from '../contexts/SnackbarContext';
import { SNACK_COLOR } from '../SnackColor';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../contexts/AuthContext';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import styled from 'styled-components';

const LogOutLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`;

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { logOut } = useAuth();
  const { toggleSnack } = useContext(SnackbarContext);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async() => {
    try {
      setLoading(true)
      await logOut()
      toggleSnack(true, `${SNACK_COLOR.info}`, 'See you soon!')
      history.push('/login')
    } catch {
      toggleSnack(true, `${SNACK_COLOR.error}`, 'ERROR. Logout failed.')
      setLoading(false)
    }
  }

  return (
    <div>
      <Button style={{textTransform: 'none'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountBoxIcon fontSize="large"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <MenuItem onClick={handleClose} disabled={loading}>
          <LogOutLink to='/me'>My page</LogOutLink>
        </MenuItem>
        <MenuItem onClick={handleLogOut} disabled={loading}>Logout</MenuItem>
      </Menu>
    </div>
  );
}