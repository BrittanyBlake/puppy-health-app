import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

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
export default addFoods;
