import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addAppointments.styles';

const AddAppointments = ({ props }) => {
  const classes = useStyles(props);
  const { AppointmentIndex } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();

  const initialFormState = {
    date: '',
    time: '',
    location: '',
    user_id: Number(AppointmentIndex),
  };

  const [values, setValues] = useState(initialFormState);
  const [isSubmited, setSubmitted] = useState(false);

  const handleChange = event => {
    const { name, value, type } = event.target;
    setValues({
      ...values,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(PuppyHealthApi.addAppointments(values));
    console.log('added', values);
    // history.push('/food');
    setSubmitted(true);
  };

  if (isSubmited) {
    // redirect to the tracking page when implemented
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
        Any important appointments?
      </h2>

      <div className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="date"
            type="date"
            onChange={handleChange}
            // defaultValue="2020-05-24"
            value={values.date}
            // label="date"
            name="date"
            autoComplete="date"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="time"
            type="time"
            onChange={handleChange}
            value={values.time}
            // label="time"
            name="time"
            autoComplete="time"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.location}
            label="Where is your appointment?"
            name="location"
            type="string"
            id="location"
            autoComplete="string"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: '#2ad042' }}
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </div>
      <BottomNav addLink="/newappointments" trackLink="/appointments" />
    </div>
  );
};

AddAppointments.propTypes = {
  props: PropTypes.func,
};

AddAppointments.defaultProps = {
  props: () => {},
};

export default AddAppointments;

// import React, { useState } from 'react';
// import { useParams, Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import PuppyHealthApi from '../../api/healthTracker';
// import Navbar from '../navbar/Navbar';
// import BottomNav from '../bottomNav/BottomNav';
// import useStyles from './addAppointments.styles';

// const AddAppointments = ({ props }) => {
//   const classes = useStyles(props);
//   const { AppointmentIndex } = useParams();
//   const dispatch = useDispatch();

//   const [isSubmited, setSubmitted] = useState(false);

//   const initialFormState = {
//     time: '',
//     appt_type: '',
//     date: '',
//     location: '',
//     user_id: Number(AppointmentIndex),
//   };

//   const [values, setValues] = useState(initialFormState);

//   const handleChange = event => {
//     const { name, value, type } = event.target;
//     setValues({
//       ...values,
//       [name]: type === 'number' ? parseInt(value, 10) : value,
//     });
//     console.log(values);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(PuppyHealthApi.addAppointments(values));
//     console.log('added', values);
//     setSubmitted(true);
//   };

//   if (isSubmited) {
//     // redirect to the tracking page when implemented
//     return <Redirect to="/" />;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className={classes.root}>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="time"
//             type="time"
//             onChange={handleChange}
//             value={values.time}
//             name="time"
//             autoComplete="time"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             onChange={handleChange}
//             value={values.date}
//             name="date"
//             type="date"
//             id="date"
//             autoComplete="date"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             onChange={handleChange}
//             value={values.location}
//             label="Where is the appointment?"
//             name="location"
//             type="string"
//             id="location"
//             autoComplete="string"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             onChange={handleChange}
//             value={values.appt_type}
//             label="What type of appointment is it?"
//             name="appt_type"
//             type="string"
//             id="appt_type"
//             autoComplete="string"
//             autoFocus
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             style={{ backgroundColor: '#2ad042' }}
//             className={classes.submit}
//           >
//             Add
//           </Button>
//         </form>
//       </div>
//       <BottomNav addLink="/newappointments" trackLink="/appointments" />
//     </div>
//   );
// };

// AddAppointments.propTypes = {
//   props: PropTypes.func,
// };

// AddAppointments.defaultProps = {
//   props: () => {},
// };

// export default AddAppointments;
