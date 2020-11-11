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

export const getGeneralHealths = generalHealth => ({
  type: 'GET_GENERAL_HEALTHS',
  payload: generalHealth,
});

export const getMedications = medication => ({
  type: 'GET_MEDICATIONS',
  payload: medication,
});

export const getTreats = treat => ({
  type: 'GET_TREATS',
  payload: treat,
});
