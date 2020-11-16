import axios from 'axios';
import * as reducerAction from '../../redux/actions/index';

const addMedications = medication => async dispatch => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const medications = {
    dosage: medication.dosage,
    name: medication.name,
    date: medication.date,
    time: medication.time,
    use: medication.use,
    user_id: medication.user_id,
  };
  try {
    const data = await axios.post(
      'https://young-scrubland-44144.herokuapp.com/api/v1/medications',
      medications,
      config,
    );
    dispatch(reducerAction.addMedications(data.medication));
  } catch (error) {
    dispatch(reducerAction.formErrors(error.response.data.message));
  }
};

export default addMedications;
