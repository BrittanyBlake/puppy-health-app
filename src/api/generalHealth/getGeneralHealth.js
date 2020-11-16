import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const getGeneralHealths = () => async dispatch => {
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

export default getGeneralHealths;
