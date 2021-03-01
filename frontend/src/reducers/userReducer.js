import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  currentUser: null,
};

export const userActionTypes = {
  NOT_AUTH: 'NOT_AUTH',
  FETCHING: 'LOADING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.NOT_AUTH:
      return {
        currentUser: null,
        fetchState: REQUEST_STATE.OK,
      }
    case userActionTypes.LOADING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      }
    case userActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        currentUser: action.payload.user
      }
    default:
      throw new Error();
  }
}