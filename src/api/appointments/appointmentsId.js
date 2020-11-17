import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const getAppointmentsId = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const data = await axios.get(
      `https://young-scrubland-44144.herokuapp.com/api/v1/appointments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(reducerAction.getAppointmentsId(data.data));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default getAppointmentsId;
