import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

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
      'https://young-scrubland-44144.herokuapp.com/api/v1/treats',
      treats,
      config,
    );
    dispatch(reducerAction.addTreats(data.treat));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default addTreats;
