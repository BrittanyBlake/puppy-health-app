const authFormErrors = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ERRORS':
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default authFormErrors;
