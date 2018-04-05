import * as Types from '../actions/types'

const initialState = {
  currentUser : null,
  all : []
}

function userReducer(state = initialState, action){
  switch(action.type){
    case Types.UPDATE_USERS :
      return {
        ...state,
        all : Object.values(action.users)
      }
    case Types.LOGIN_USER :
      return {
        ...state,
        currentUser : action.user
      }
    default :
      return state;
  }
}

export default userReducer;
