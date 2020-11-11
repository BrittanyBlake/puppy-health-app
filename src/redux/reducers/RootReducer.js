import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';
import getFoodReducer from './getFoodReducer';
import getGeneralHealthsReducer from './getGeneralHealthsReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
  food: getFoodReducer,
  generalHealths: getGeneralHealthsReducer,

});

export default RootReducer;
