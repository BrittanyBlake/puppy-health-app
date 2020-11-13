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
      window.location = '/';
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
      console.log('foods api', data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const addFoods = food => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const foods = {
      brand: food.brand,
      amount: food.amount,
      date: food.date,
      time: food.time,
      user_id: food.user_id,
    };
    try {
      const data = await axios.post(
        'http://localhost:3000/api/v1/foods',
        foods,
        config,
      );
      dispatch(reducerAction.addFoods(data.food));
      console.log('add foods:', data.food);
      window.location = '/food';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getFoodsId = id => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(
        `http://localhost:3000/api/v1/foods/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(reducerAction.getFoodsId(data.data));
      console.log('api', data.id);
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

  const addGeneralHealths = generalHealth => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const generalHealths = {
      weight: generalHealth.weight,
      energy_level: generalHealth.energy_level,
      hunger_level: generalHealth.hunger_level,
      date: generalHealth.date,
      extra: generalHealth.extra,
      user_id: generalHealth.user_id,
    };
    try {
      const data = await axios.post(
        'http://localhost:3000/api/v1/general_healths',
        generalHealths,
        config,
      );
      dispatch(reducerAction.addGeneralHealths(data.generalHealth));
      console.log('add meds:', data.generalHealth);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getMedications = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(
        'http://localhost:3000/api/v1/medications',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(reducerAction.getMedications(data.data));
      console.log('data:', data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const addMedications = medication => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const medications = {
      dosage: medication.dosage,
      name: medication.name,
      date: medication.date,
      time: medication.time,
      use: medication.use,
      user_id: medication.user_id,
    };
    try {
      const data = await axios.post(
        'http://localhost:3000/api/v1/medications',
        medications,
        config,
      );
      dispatch(reducerAction.addMedications(data.medication));
      console.log('add meds:', data.medication);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getTreats = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(
        'http://localhost:3000/api/v1/treats',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(reducerAction.getTreats(data.data));
      console.log('data:', data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const addTreats = treat => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const treats = {
      amount: treat.amount,
      treat_type: treat.treat_type,
      date: treat.date,
      user_id: treat.user_id,
    };
    try {
      const data = await axios.post(
        'http://localhost:3000/api/v1/treats',
        treats,
        config,
      );
      dispatch(reducerAction.addTreats(data.treat));
      console.log('add treat:', data.treat);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getWalks = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(
        'http://localhost:3000/api/v1/walks',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(reducerAction.getWalks(data.data));
      console.log('data:', data.data);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const addWalks = walk => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const walks = {
      date: walk.date,
      distance: walk.distance,
      time: walk.time,
      user_id: walk.user_id,
    };
    try {
      const data = await axios.post(
        'http://localhost:3000/api/v1/walks', walks, config,
      );
      dispatch(reducerAction.addWalks(data.walk));
      console.log('add data:', data.walk);
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  return {
    signUpUser,
    loginUser,
    getFoods,
    addFoods,
    getFoodsId,
    getGeneralHealths,
    addGeneralHealths,
    getMedications,
    addMedications,
    getTreats,
    addTreats,
    getWalks,
    addWalks,
  };
})();

export default PuppyHealthApi;
