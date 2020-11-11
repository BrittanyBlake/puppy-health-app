const getTreatsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TREATS':
      return action.payload;
    default:
      return state;
  }
};

export default getTreatsReducer;
