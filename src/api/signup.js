import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const signUpUser = user => async dispatch => {
  try {
    const data = await axios.post(
      'https://young-scrubland-44144.herokuapp.com/signup',
      {
        users: {
          email: user.email,
          name: user.name,
          password: user.password,
          password_confirmation: user.password_confirmation,
        },
      },
    );
    localStorage.setItem('token', data.data.auth_token);
    dispatch(reducerAction.loginUser(data.user));
    window.location = '/';
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default signUpUser;
