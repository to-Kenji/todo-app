import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const CreateTaskDialog = ({
  isOpen,
  handleClickOpen,
  handleClose,
  titleState,
  setTitleState,
  handleSubmit,
}) => {

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Task
      </Button>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            It is better for you to make a task as "detailed and small" as possible.
          </DialogContentText>
          <DialogContentText>
            タスクは可能な限り「詳細」且つ「小刻み」に。(40文字以内)
          </DialogContentText>
          <TextField
            autoFocus
            name="title"
            margin="dense"
            id="title"
            label="Task?"
            type="title"
            fullWidth
            value={titleState}
            onChange={event => setTitleState(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
