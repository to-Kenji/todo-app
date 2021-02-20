import axios from 'axios';
import { postsIndexUrl } from './urls';

export const fetchTasks = async() => {
  return await axios.get(postsIndexUrl)
  .then(resp => {
    return resp.data
  })
  .catch(error => console.error(error))
};