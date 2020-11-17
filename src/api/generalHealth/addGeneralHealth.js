import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

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

export default addGeneralHealths;
