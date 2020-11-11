import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
});

export default RootReducer;
