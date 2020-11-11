const getMedicationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEDICATIONS':
      return action.payload;
    default:
      return state;
  }
};

export default getMedicationsReducer;
