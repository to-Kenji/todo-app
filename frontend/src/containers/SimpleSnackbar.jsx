import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { SnackbarContext } from '../contexts/SnackbarContext';

export const SimpleSnackbar = () => {
  const { snackState, toggleSnack } = useContext(SnackbarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    toggleSnack(false, '', '');
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
        // action={
        //   <React.Fragment>
        //     <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        //       <CloseIcon fontSize="small" />
        //     </IconButton>
        //   </React.Fragment>
        // }
        >
        <Alert onClose={handleClose} severity={snackState.type}>
          {snackState.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
