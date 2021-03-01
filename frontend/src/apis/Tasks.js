import axios from 'axios';
import { tasksIndexUrl, taskUrl } from './urls';

export const fetchTasks = () => {
  return axios.get(tasksIndexUrl)
  .then(resp => {
    return resp.data
  })
  .catch(error => console.error(error))
};

export const postTask = (params) => {
  return axios.post(tasksIndexUrl, {
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