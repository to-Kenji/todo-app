import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { SnackbarContext } from '../contexts/SnackbarContext';

export const SimpleSnackbar = () => {
  const { snackState, toggleSnack } = useContext(SnackbarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    toggleSnack(false, 'success', '');
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackState.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        >
        <Alert onClose={handleClose} severity={snackState.type}>
          {snackState.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
