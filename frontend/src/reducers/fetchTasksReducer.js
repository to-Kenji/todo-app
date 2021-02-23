import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  tasksList: [],
};

export const tasksActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  ADD_TASK: 'ADD_TASK',
};

export const fetchTasksReducer = (state, action) => {
  switch (action.type) {
    case tasksActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      }
    case tasksActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        tasksList: action.payload.tasks,
      }
    case tasksActionTypes.ADD_TASK:
      const currentTasksList = state.tasksList;
      const newTasksList = [...currentTasksList, action.payload.task]
      return {
        fetchState: REQUEST_STATE.OK,
        tasksList: newTasksList,
      }

    default:
      throw new Error();
  }
};