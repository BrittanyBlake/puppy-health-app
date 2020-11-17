import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

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
      'https://young-scrubland-44144.herokuapp.com/api/v1/walks',
      walks,
      config,
    );
    dispatch(reducerAction.addWalks(data.walk));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default addWalks;
