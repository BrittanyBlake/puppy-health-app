const TreatsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TREATS':
      return action.payload;
    case 'ADD_TREATS':
      return {
        ...state,
        treat: action.payload,
      };
    default:
      return state;
  }
};

export default TreatsReducer;
