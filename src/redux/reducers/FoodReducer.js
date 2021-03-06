const FoodReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FOODS':
      return action.payload;
    case 'ADD_FOODS':
      return {
        ...state,
        food: action.payload,
      };
    case 'GET_FOODS_ID':
      return action.payload;

    default:
      return state;
  }
};

export default FoodReducer;
