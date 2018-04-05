import * as Types from '../actions/types'

const initialState = {}

function userReducer(state = initialState, action){
  switch(action.type){
    case Types.UPDATE_USERS :
      return action.users
    default :
      return state;
  }
}

export default userReducer;
