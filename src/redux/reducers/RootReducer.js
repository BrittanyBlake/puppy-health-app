import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authFormErrors from './authErrors';
import FoodReducer from './FoodReducer';
import GeneralHealthsReducer from './GeneralHealthsReducer';
import MedicationsReducer from './MedicationReducer';
import TreatsReducer from './TreatsReducer';
import WalksReducer from './WalksReducer';
import AppointmentReducer from './AppointmentReducer';

const RootReducer = combineReducers({
  currentUser: userReducer,
  errors: authFormErrors,
  food: FoodReducer,
  generalHealths: GeneralHealthsReducer,
  medications: MedicationsReducer,
  treats: TreatsReducer,
  walks: WalksReducer,
  appointments: AppointmentReducer,

});

export default RootReducer;
