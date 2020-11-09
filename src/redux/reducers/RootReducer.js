import { combineReducers } from 'redux';
import userReducer from './userReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
});

export default RootReducer;
