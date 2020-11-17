import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const getTreats = () => async dispatch => {
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

export default getTreats;
