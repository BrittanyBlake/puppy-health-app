const GeneralHealthsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GENERAL_HEALTHS":
      return action.payload;
    case "ADD_GENERAL_HEALTHS":
      return {
        ...state,
        generalHealth: action.payload,
      };
    default:
      return state;
  }
};

export default GeneralHealthsReducer;
