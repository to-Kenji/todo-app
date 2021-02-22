import React, { Fragment, useEffect, useReducer } from "react";
import styled from 'styled-components';

import { fetchTasks } from "../apis/fetchTasks";
import { fetchTasksReducer, initialState, tasksActionTypes } from "../reducers/fetchTasksReducer";

import { TaskContents } from '../components/TaskContents';
import { CreateTaskDialog } from '../components/CreateTaskDialog';

const CreateButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
      <CreateButtonWrapper>
        <CreateTaskDialog />
      </CreateButtonWrapper>
      <TaskContents tasksState={tasksState} />
    </Fragment>
  )
};