import React, { Fragment, useEffect, useReducer, useState } from "react";
import styled from 'styled-components';

import { fetchTasks, postTask } from "../apis/Tasks";
import { 
  fetchTasksReducer,
  initialState as TasksListInitialState,
  tasksActionTypes,
} from "../reducers/fetchTasksReducer";

import { TaskContents } from '../components/TaskContents';
import { CreateTaskDialog } from '../components/CreateTaskDialog';

const CreateButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Tasks = () => {
  const [tasksState, dispatch] = useReducer(fetchTasksReducer, TasksListInitialState);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [titleState, setTitleState] = useState("")

  const handleClose = () => {
    setDialogOpen(false)
    setTitleState("")
  };

  const handleSubmit = () => {
    setDialogOpen(false)
    postTask({
      title: titleState
    }).then(data => {
      dispatch({
        type: tasksActionTypes.ADD_TASK,
        payload: {
          task: data.task
        }
      })
    })
    setTitleState("")
  };

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
    .catch((e) => console.error(e));
  }, [])

  return (
    <Fragment>
      <CreateButtonWrapper>
        <CreateTaskDialog
          isOpen={dialogOpen}
          handleClickOpen={() => setDialogOpen(true)}
          handleClose={handleClose}
          titleState={titleState}
          setTitleState={setTitleState}
          handleSubmit={handleSubmit}
        />
      </CreateButtonWrapper>
      <TaskContents tasksList={tasksState.tasksList} />
    </Fragment>
  )
};