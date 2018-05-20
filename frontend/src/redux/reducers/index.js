import { combineReducers } from 'redux';
import userReducer from './Users';
import questionReducer from './Questions';

const rootReducer = combineReducers({
	users : userReducer,
	questions : questionReducer
})

export default rootReducer;
