import { getAllQuestions, voteForQuestion, addQuestion } from '../../Utils/api';
import * as Types from './types.js';

export const loadQuestions = () => {
  return (dispatch) => {
    getAllQuestions().then(res => {
      dispatch(updateQuestions(res));
    }).catch(console.log);
  }
}

export const updateQuestions = ( questions ) => {
  return {
    type: Types.UPDATE_QUESTIONS,
    questions: questions
  }
}

export const updateQuestionView = ( view ) => {
  return {
    type: Types.UPDATE_QUESTION_VIEW,
    view: view
  }
}

export const setLoading = () => {
  return {
    type: Types.SET_LOADING
  }
}

export const addNewQuestion = ( question ) => {
  return {
    type: Types.NEW_QUESTION,
    question: question
  }
}

export const saveQuestionAnswer = (userId, questionId, answer) => {
  return (dispatch) => {
    voteForQuestion(userId, questionId, answer).then(()=>{
      dispatch(setLoading());
      dispatch(loadQuestions());
    }).catch(console.log);
  }
}

export const newQuestion = (optionOne, optionTwo, authorId) => {
  return (dispatch) => {
    dispatch(setLoading());
    addQuestion(optionOne, optionTwo, authorId).then(res=>{
      dispatch(addNewQuestion(res));
      return res.id;
    }).catch(console.log);
  }
}
