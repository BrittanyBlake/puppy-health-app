const getWalksReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WALKS":
      return action.payload;
    default:
      return state;
  }
};

export default getWalksReducer;
