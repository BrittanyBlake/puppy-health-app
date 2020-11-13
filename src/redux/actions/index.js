// import axios from 'axios';

export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',

});

export const formErrors = errors => ({
  type: 'GET_ERRORS',
  payload: errors,
});

export const getFoods = food => ({
  type: 'GET_FOODS',
  payload: food,
});

export const addFoods = food => ({
  type: 'ADD_FOODS',
  payload: food,
});

export const getFoodsId = food => ({
  type: 'GET_FOODS_ID',
  payload: food,
  // foodId: food,
});

export const getGeneralHealths = generalHealth => ({
  type: 'GET_GENERAL_HEALTHS',
  payload: generalHealth,
});

export const addGeneralHealths = generalHealth => ({
  type: 'ADD_GENERAL_HEALTHS',
  payload: generalHealth,
});

export const getGeneralHealthsId = generalHealth => ({
  type: 'GET_GENERAL_HEALTHS_ID',
  payload: generalHealth,
});

export const getMedications = medication => ({
  type: 'GET_MEDICATIONS',
  payload: medication,
});

export const getMedicationsId = medication => ({
  type: 'GET_MEDICATIONS_ID',
  payload: medication,
});

export const addMedications = medication => ({
  type: 'ADD_MEDICATIONS',
  payload: medication,
});

export const getTreats = treat => ({
  type: 'GET_TREATS',
  payload: treat,
});

export const getTreatsId = treat => ({
  type: 'GET_TREATS_ID',
  payload: treat,
});

export const addTreats = treat => ({
  type: 'ADD_TREATS',
  payload: treat,
});

export const getWalks = walk => ({
  type: 'GET_WALKS',
  payload: walk,
});

export const getWalksId = walk => ({
  type: 'GET_WALKS_ID',
  payload: walk,
});

export const addWalks = walk => ({
  type: 'ADD_WALKS',
  payload: walk,
});

export const getAppointments = appointment => ({
  type: 'GET_APPOINTMENTS',
  payload: appointment,
});

export const getAppointmentsId = appointment => ({
  type: 'GET_APPOINTMENTS_ID',
  payload: appointment,
});

export const addAppointments = appointment => ({
  type: 'ADD_APPOINTMENTS',
  payload: appointment,
});
