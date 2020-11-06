import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  currentUser: userReducer,
});

export default RootReducer;
