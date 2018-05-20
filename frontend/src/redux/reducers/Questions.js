import * as Types from '../actions/types'

const initialState = {
  all: []
}

function questionReducer(state = initialState, action){
  switch(action.type){
    case Types.UPDATE_QUESTIONS :
      return {
        ...state,
        all: Object.values(action.questions)
      }
    default :
      return state;
  }
}

export default questionReducer;
