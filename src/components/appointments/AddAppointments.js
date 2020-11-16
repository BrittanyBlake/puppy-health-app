import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import addAppointments from '../../api/appointments/addAppointment';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addAppointments.styles';

const AddAppointments = ({ props }) => {
  const classes = useStyles(props);
  const { AppointmentIndex } = useParams();
  const dispatch = useDispatch();

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
    dispatch(addAppointments(values));
    setSubmitted(true);
  };

  if (isSubmited) {
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
            value={values.date}
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
            label="Where is it?"
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
