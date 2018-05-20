import { combineReducers } from 'redux';
import userReducer from './Users';

const rootReducer = combineReducers({
	users : userReducer
})

export default rootReducer;
