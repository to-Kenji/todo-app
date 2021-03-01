import axios from 'axios';
import { tasksIndexUrl, taskUrl } from './urls';

export const fetchTasks = (user) => {
  return axios.get(tasksIndexUrl(user.id))
  .then(resp => {
    return resp.data
  })
  .catch(error => console.error(error))
};

export const postTask = (params) => {
  return axios.post(tasksIndexUrl(params.user.id), {
    title: params.title
  })
  .then(resp => {
    return resp.data
  })
  .catch(error => {throw error;})
};

export const deleteTask = (params) => {
  return axios.delete(taskUrl(params))
  .then(resp => {
    return resp.data
  })
  .catch(error => {throw error;})
}