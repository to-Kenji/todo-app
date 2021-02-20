import React, { Fragment, useEffect, useReducer } from "react";
import { fetchTasks } from "../apis/fetchTasks";
import { fetchTasksReducer, initialState, tasksActionTypes } from "../reducers/fetchTasksReducer";


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
    <div>
      {
        tasksState.tasksList.map((task, index) => 
          <p key={index}>{task.title}</p>
        )
      }
    </div>
  )
};