import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveUser } from '../_DATA';
import { setCurrentUser } from './currentUser';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER'; 

export function receiveUsers (users) {
    return {
      type: RECEIVE_USERS,
      users,
    }
} 

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddUser(name, username) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveUser({name, username})
      .then((formattedUser) => {
        dispatch(addUser(formattedUser));
        dispatch(setCurrentUser(username));
      })
      .then(() => {
        dispatch(hideLoading());
      })
  }
}