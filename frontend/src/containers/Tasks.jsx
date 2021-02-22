import React, { Fragment, useEffect, useReducer } from "react";

import { fetchTasks } from "../apis/fetchTasks";
import { fetchTasksReducer, initialState, tasksActionTypes } from "../reducers/fetchTasksReducer";

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const TasksPaper = styled(Paper)`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Tasks = () => {
  const [tasksState, dispatch] = useReducer(fetchTasksReducer, initialState);

  useEffect(() => {
    dispatch({type: tasksActionTypes.FETCHING});
    fetchTasks()
    .then((data) => {
      dispatch({
        type: tasksActionTypes.FETCH_SUCCESS,
        payload: {
          tasks: data.tasks
        }
      })
    })
  }, [tasksState.tasksList.length])

  return (
    <Fragment>
      <Grid container justify="space-around">
        <Grid item xs={8}>
          {
            tasksState.tasksList.map((task, index) => 
              <TasksPaper key={index}>      
                  <Grid item xs={10}>
                    <p>
                      {task.title}
                    </p>
                  </Grid>
              </TasksPaper>
            )
          } 
        </Grid>
      </Grid>
    </Fragment>
  )
};