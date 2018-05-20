import { getAllQuestions } from '../../Utils/api';
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
