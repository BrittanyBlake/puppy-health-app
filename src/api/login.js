import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const loginUser = user => async dispatch => {
  try {
    const data = await axios.post(
      'https://young-scrubland-44144.herokuapp.com/auth/login',
      {
        user: {
          email: user.email,
          password: user.password,
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

export default loginUser;
