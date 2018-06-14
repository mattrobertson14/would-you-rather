import * as Types from '../actions/types'

const initialState = {
  all: [],
  questionView: 'unanswered',
  loading: true
}

function questionReducer(state = initialState, action){
  switch(action.type){
    case Types.UPDATE_QUESTIONS :
      return {
        ...state,
        all: Object.values(action.questions),
        byId: action.questions,
        loading: false
      }
    case Types.UPDATE_QUESTION_VIEW :
      return {
        ...state,
        questionView: action.view
      }
    case Types.SET_LOADING :
      return {
        ...state,
        loading: true
      }
    case Types.NEW_QUESTION :
      state.all.push(action.question);
      return {
        ...state,
        questionView: 'unanswered',
        byId: {
          ...state.byId,
          [action.question.id]: action.question
        },
        loading: false
      }
    default :
      return state;
  }
}

export default questionReducer;
