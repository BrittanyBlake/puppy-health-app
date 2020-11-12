import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addMedications.styles';

const AddMedications = ({ props }) => {
  const classes = useStyles(props);
  const { MedIndex } = useParams();
  const dispatch = useDispatch();
  const [isSubmited, setSubmitted] = useState(false);

  const initialFormState = {
    dosage: '',
    name: '',
    date: '',
    time: '',
    use: '',
    user_id: Number(MedIndex),
  };

  const [values, setValues] = useState(initialFormState);

  const handleChange = event => {
    const { name, value, type } = event.target;
    setValues({
      ...values,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(PuppyHealthApi.addMedications(values));
    console.log('added');
    setSubmitted(true);
  };

  if (isSubmited) {
    // redirect to the tracking page when implemented
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
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
            label="date"
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
            label="time"
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
            value={values.dosage}
            name="dosage"
            type="string"
            id="dosage"
            autoComplete="string"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.name}
            name="name"
            type="string"
            id="name"
            autoComplete="string"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.use}
            name="use"
            type="string"
            id="use"
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
      <BottomNav />
    </div>
  );
};

AddMedications.propTypes = {
  props: PropTypes.func,
};

AddMedications.defaultProps = {
  props: () => {},
};

export default AddMedications;
