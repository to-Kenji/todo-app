import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ViewTask } from './ViewTask';

export const TaskContents = (props) => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={8}>
        {
          props.tasksList.map((task) => {
            return (
              <ViewTask task={task} key={task.id} handleDelete={props.handleDelete}/>
            )
          })
        } 
     </Grid>
   </Grid>
  )
};