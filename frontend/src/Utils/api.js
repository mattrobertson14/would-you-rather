import { _getUsers } from './_DATA.js';

export const getAllUsers = () => {
  return _getUsers().then( users => {
    return users;
  }).catch((err)=>{
    console.log(err);
  });
}
