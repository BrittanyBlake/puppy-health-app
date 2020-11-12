const MedicationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEDICATIONS':
      return action.payload;
    case 'ADD_MEDICATIONS':
      return {
        ...state,
        medication: action.payload,
      };
    default:
      return state;
  }
};

export default MedicationsReducer;
