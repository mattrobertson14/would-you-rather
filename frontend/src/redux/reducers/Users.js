import * as Types from '../actions/types'

const initialState = {
  currentUser : null,
  all : [],
  byId : {}
}

function userReducer(state = initialState, action){
  switch(action.type){
    case Types.UPDATE_USERS :
      return {
        ...state,
        all : Object.values(action.users),
        byId : action.users
      }
    case Types.LOGIN_USER :
      return {
        ...state,
        currentUser : action.user
      }
    case Types.LOGOUT_USER :
      return {
        ...state,
        currentUser : null
      }
    default :
      return state;
  }
}

export default userReducer;
