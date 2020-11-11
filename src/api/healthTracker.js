import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const PuppyHealthApi = (() => {
  const signUpUser = user => async dispatch => {
    try {
      const data = await axios.post('http://localhost:3000/signup', {
        users: {
          email: user.email,
          name: user.name,
          password: user.password,
          password_confirmation: user.password_confirmation,
        },
      });
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      console.log('signed up');
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const loginUser = user => async dispatch => {
    try {
      const data = await axios.post('http://localhost:3000/auth/login', {
        user: {
          email: user.email,
          password: user.password,
        },
      });
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      window.location = '/homepage';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  return {
    signUpUser,
    loginUser,
  };
})();

export default PuppyHealthApi;
