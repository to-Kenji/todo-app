import React, { Fragment, useContext, useEffect, useReducer, useState } from "react";
import styled from 'styled-components';

import { SnackbarContext } from '../contexts/SnackbarContext';
import { SNACK_COLOR } from '../SnackColor';
import { deleteTask, fetchTasks, postTask } from "../apis/Tasks";
import { 
  fetchTasksReducer,
  initialState as TasksListInitialState,
  tasksActionTypes,
} from "../reducers/fetchTasksReducer";

import { TaskContents } from '../components/TaskContents';
import { CreateTaskDialog } from '../components/CreateTaskDialog';

import { useAuth } from '../contexts/AuthContext';


const CreateButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Tasks = () => {
  const [tasksState, dispatch] = useReducer(fetchTasksReducer, TasksListInitialState);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [titleState, setTitleState] = useState("")
  const { toggleSnack } = useContext(SnackbarContext);

  const { userState } = useAuth();

  const handleClose = () => {
    setDialogOpen(false)
    setTitleState("")
  };

  const handleSubmit = () => {
    setDialogOpen(false)
    postTask({
      user: userState.currentUser,
      title: titleState
    }).then(data => {
      dispatch({
        type: tasksActionTypes.ADD_TASK,
        payload: {
          task: data.task
        }
      })
      toggleSnack(true, `${SNACK_COLOR.success}`, 'You created a new Task!')
    })
    .catch((e) => {
      console.error(e)
      toggleSnack(true, `${SNACK_COLOR.error}`, 'Create failed!')
    })
    setTitleState("")
  };

  const handleDelete = (task) => {
    alert(`Delete Task : ${task.title}\nYou sure?`)
    deleteTask({
      taskId: task.id,
      userId: userState.currentUser.id
    })
    .then((data) => {
      dispatch({
        type: tasksActionTypes.FETCH_SUCCESS,
        payload: {
          tasks: data.tasks
        }
      })
      toggleSnack(true, `${SNACK_COLOR.success}`, 'Delete succeeded!')
    })
    .catch(e => {
      console.error(e)
      toggleSnack(true, `${SNACK_COLOR.error}`, 'ERROR!')
    })
  };

  useEffect(() => {
    dispatch({type: tasksActionTypes.FETCHING})
    fetchTasks(userState.currentUser)
    .then((data) => {
      dispatch({
        type: tasksActionTypes.FETCH_SUCCESS,
        payload: {
          tasks: data.tasks
        }
      })
    })
    .catch((e) => console.error(e))
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
      <TaskContents tasksList={tasksState.tasksList} handleDelete={handleDelete}/>
    </Fragment>
  )
};