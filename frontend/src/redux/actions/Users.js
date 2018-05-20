import { getAllUsers } from '../Utils/api';
import * as Types from './types.js';

export const loadUsers = () => {
  return (dispatch) => {
    getAllUsers().then(response => {
      dispatch(updateUsers(response));
    }).catch(console.log);
  }
}

export const updateUsers = ( users ) => {
  return {
    type : Types.UPDATE_USERS,
    users : users
  }
}

export const loginUser = ( user ) => {
  return {
    type : Types.LOGIN_USER,
    user : user
  }
}

export const logoutUser = () => {
  return {
    type : Types.LOGOUT_USER
  }
}
