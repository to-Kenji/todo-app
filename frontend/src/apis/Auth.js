import axios from 'axios';
import { signUpUrl, getUserUrl } from './urls';

export const signUpApi = (data) => {
  return axios.post(signUpUrl, {
    email: data.email,
    uid: data.uid
  })
  .then(resp => {
    return resp
  })
  .catch(error => {throw error})
};

export const fetchUser = (user) => {
  return axios.get(getUserUrl(user.uid))
  .then(resp => {
    return resp
  })
  .catch(error => {throw error})
};