import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';
import getFoodReducer from './getFoodReducer';
import GeneralHealthsReducer from './GeneralHealthsReducer';
import MedicationsReducer from './MedicationReducer';
import TreatsReducer from './TreatsReducer';
import WalksReducer from './WalksReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
  food: getFoodReducer,
  generalHealths: GeneralHealthsReducer,
  medications: MedicationsReducer,
  treats: TreatsReducer,
  walks: WalksReducer,

});

export default RootReducer;
