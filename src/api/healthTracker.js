import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

// const PuppyHealthApi = (() => {
// export const signUpUser = user => async dispatch => {
//   try {
//     const data = await axios.post('https://young-scrubland-44144.herokuapp.com/signup', {
//       users: {
//         email: user.email,
//         name: user.name,
//         password: user.password,
//         password_confirmation: user.password_confirmation,
//       },
//     });
//     localStorage.setItem('token', data.data.auth_token);
//     dispatch(reducerAction.loginUser(data.user));
//     window.location = '/';
//   } catch (error) {
//     dispatch(reducerAction.formErrors(error.response.data.message));
//   }
// };

export const loginUser = user => async dispatch => {
  try {
    const data = await axios.post('https://young-scrubland-44144.herokuapp.com/auth/login', {
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

export const getFoods = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get('https://young-scrubland-44144.herokuapp.com/api/v1/foods',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    dispatch(reducerAction.getFoods(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addFoods = food => async dispatch => {
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
      'https://young-scrubland-44144.herokuapp.com/api/v1/foods',
      foods,
      config,
    );
    dispatch(reducerAction.addFoods(data.food));
    window.location = '/food';
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getFoodsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/foods/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getFoodsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getGeneralHealths = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      'https://young-scrubland-44144.herokuapp.com/api/v1/general_healths',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getGeneralHealths(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getGeneralHealthsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/general_healths/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getGeneralHealthsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addGeneralHealths = generalHealth => async dispatch => {
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
    user_id: generalHealth.user_id,
  };
  try {
    const data = await axios.post(
      'https://young-scrubland-44144.herokuapp.com/api/v1/general_healths',
      generalHealths,
      config,
    );
    dispatch(reducerAction.addGeneralHealths(data.generalHealth));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getMedications = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      'https://young-scrubland-44144.herokuapp.com/api/v1/medications',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getMedications(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getMedicationsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/medications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getMedicationsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addMedications = medication => async dispatch => {
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
      'https://young-scrubland-44144.herokuapp.com/api/v1/medications',
      medications,
      config,
    );
    dispatch(reducerAction.addMedications(data.medication));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getTreats = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      'https://young-scrubland-44144.herokuapp.com/api/v1/treats',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getTreats(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getTreatsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/treats/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getTreatsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addTreats = treat => async dispatch => {
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
      'https://young-scrubland-44144.herokuapp.com/api/v1/treats',
      treats,
      config,
    );
    dispatch(reducerAction.addTreats(data.treat));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getWalks = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      'https://young-scrubland-44144.herokuapp.com/api/v1/walks',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getWalks(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getWalksId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/walks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getWalksId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addWalks = walk => async dispatch => {
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
      'https://young-scrubland-44144.herokuapp.com/api/v1/walks', walks, config,
    );
    dispatch(reducerAction.addWalks(data.walk));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getAppointments = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      'https://young-scrubland-44144.herokuapp.com/api/v1/appointments',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getAppointments(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const getAppointmentsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(`https://young-scrubland-44144.herokuapp.com/api/v1/appointments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(reducerAction.getAppointmentsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export const addAppointments = appointment => async dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const appointments = {
    time: appointment.time,
    appt_type: appointment.type,
    date: appointment.date,
    location: appointment.location,
    user_id: appointment.user_id,
  };
  try {
    const data = await axios.post(
      'https://young-scrubland-44144.herokuapp.com/api/v1/appointments', appointments, config,
    );
    dispatch(reducerAction.addAppointments(data.appointments));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

// export {
//   signUpUser,
//   loginUser,
//   getFoods,
//   addFoods,
//   getFoodsId,
//   getGeneralHealths,
//   getGeneralHealthsId,
//   addGeneralHealths,
//   getMedications,
//   getMedicationsId,
//   addMedications,
//   getTreats,
//   addTreats,
//   getTreatsId,
//   getWalks,
//   getWalksId,
//   addWalks,
//   getAppointments,
//   getAppointmentsId,
//   addAppointments,
// };
// })();
