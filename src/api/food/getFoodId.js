import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const getFoodsId = id => async dispatch => {
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

export default getFoodsId;
