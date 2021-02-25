import axios from 'axios';
import { tasksIndexUrl, taskUrl } from './urls';

export const fetchTasks = async() => {
  return await axios.get(tasksIndexUrl)
  .then(resp => {
    return resp.data
  })
  .catch(error => console.error(error))
};

export const postTask = async(params) => {
  return await axios.post(tasksIndexUrl, {
    title: params.title
  })
  .then(resp => {
    return resp.data
  })
  .catch(error => {throw error;})
};

export const deleteTask = async(params) => {
  return await axios.delete(taskUrl(params))
  .then(resp => {
    return resp.data
  })
  .catch(error => {throw error;})
}