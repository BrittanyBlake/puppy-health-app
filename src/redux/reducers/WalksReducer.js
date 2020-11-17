const WalksReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_WALKS':
      return action.payload;
    case 'ADD_WALKS':
      return {
        ...state,
        walk: action.payload,
      };
    case 'GET_WALKS_ID':
      return action.payload;
    default:
      return state;
  }
};

export default WalksReducer;
