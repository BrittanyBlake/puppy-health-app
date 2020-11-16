import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const addAppointments = appointment => async dispatch => {
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
      'https://young-scrubland-44144.herokuapp.com/api/v1/appointments',
      appointments,
      config,
    );
    dispatch(reducerAction.addAppointments(data.appointments));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default addAppointments;
