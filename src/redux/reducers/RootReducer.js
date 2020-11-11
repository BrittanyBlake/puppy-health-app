import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';
import getFoodReducer from './getFoodReducer';
import getGeneralHealthsReducer from './getGeneralHealthsReducer';
import getMedicationsReducer from './getMedicationReducer';
import getTreatsReducer from './getTreatReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
  food: getFoodReducer,
  generalHealths: getGeneralHealthsReducer,
  medications: getMedicationsReducer,
  treats: getTreatsReducer,

});

export default RootReducer;
