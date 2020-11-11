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
      window.location = '/profile';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getFoods = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('http://localhost:3000/api/v1/foods',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getFoods(data.data));
      console.log(data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getGeneralHealths = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(
        'http://localhost:3000/api/v1/general_healths',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(reducerAction.getGeneralHealths(data.data));
      console.log(data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  return {
    signUpUser,
    loginUser,
    getFoods,
    getGeneralHealths,
  };
})();

export default PuppyHealthApi;
