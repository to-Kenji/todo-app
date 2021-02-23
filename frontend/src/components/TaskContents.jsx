import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const TasksPaper = styled(Paper)`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const TaskContents = (props) => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={8}>
        {
          props.tasksList.map((task) => {
            return (
              <TasksPaper key={task.id}>      
                <Grid item xs={10}>
                  <p>
                    {task.title}
                  </p>
                </Grid>
              </TasksPaper>
            )
          })
        } 
     </Grid>
   </Grid>
  )
};