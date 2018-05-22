import { _getUsers, _getQuestions, _saveQuestionAnswer } from './_DATA.js';

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

export const voteForQuestion = ( userId, questionId, answer ) => {
  return _saveQuestionAnswer().then(res => {
    console.log(res);
  }).catch( err => {
    console.log(err);
  });
}
