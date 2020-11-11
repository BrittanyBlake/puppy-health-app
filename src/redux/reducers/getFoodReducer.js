const getFoodReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FOODS':
      return action.payload;

    default:
      return state;
  }
};

export default getFoodReducer;
