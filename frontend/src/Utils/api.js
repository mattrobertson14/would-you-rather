import { _getUsers, _getQuestions } from './_DATA.js';

export const getAllUsers = () => {
  return _getUsers().then( users => {
    return users;
  }).catch((err)=>{
    console.log(err);
  });
}

export const getAllQuestions = () => {
  return _getQuestions().then( questions => {
    return questions;
  }).catch((err) => {
    console.log(err);
  });
}
