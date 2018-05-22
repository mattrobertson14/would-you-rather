import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA.js';

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

export const voteForQuestion = ( authedUser, qid, answer ) => {
  return _saveQuestionAnswer({authedUser, qid, answer}).then(q => {
    return q;
  }).catch( err => {
    console.log(err);
  });
}

export const addQuestion = (optionOne, optionTwo, authorId) => {
  let question = {}
  question.optionOneText = optionOne;
  question.optionTwoText = optionTwo;
  question.author = authorId;

  return _saveQuestion(question).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
}
