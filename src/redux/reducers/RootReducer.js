import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';
import getFoodReducer from './getFoodReducer';
import getGeneralHealthsReducer from './getGeneralHealthsReducer';
import getMedicationsReducer from './getMedicationReducer';
import TreatsReducer from './TreatsReducer';
import WalksReducer from './WalksReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
  food: getFoodReducer,
  generalHealths: getGeneralHealthsReducer,
  medications: getMedicationsReducer,
  treats: TreatsReducer,
  walks: WalksReducer,

});

export default RootReducer;
