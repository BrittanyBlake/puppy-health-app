const AppointmentReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_APPOINTMENTS":
      return action.payload;
    case "ADD_APPOINTMENTS":
      return {
        ...state,
        appointment: action.payload,
      };
    case "GET_APPOINTMENTS_ID":
      return action.payload;
    default:
      return state;
  }
};

export default AppointmentReducer;
