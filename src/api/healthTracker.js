import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

// export const getTreats = () => async dispatch => {
//   const token = localStorage.getItem('token');
//   try {
//     const data = await axios.get(
//       'https://young-scrubland-44144.herokuapp.com/api/v1/treats',
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     dispatch(reducerAction.getTreats(data.data));
//   } catch (error) {
//     dispatch(reducerAction.formErrors(error.response.data.message));
//   }
// };

// export const getTreatsId = id => async dispatch => {
//   const token = localStorage.getItem('token');
//   try {
//     const data = await axios.get(
//       `https://young-scrubland-44144.herokuapp.com/api/v1/treats/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     dispatch(reducerAction.getTreatsId(data.data));
//   } catch (error) {
//     dispatch(reducerAction.formErrors(error.response.data.message));
//   }
// };

// export const addTreats = treat => async dispatch => {
//   const token = localStorage.getItem('token');
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const treats = {
//     amount: treat.amount,
//     treat_type: treat.treat_type,
//     date: treat.date,
//     user_id: treat.user_id,
//   };
//   try {
//     const data = await axios.post(
//       'https://young-scrubland-44144.herokuapp.com/api/v1/treats',
//       treats,
//       config,
//     );
//     dispatch(reducerAction.addTreats(data.treat));
//   } catch (error) {
//     dispatch(reducerAction.formErrors(error.response.data.message));
//   }
// };

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
