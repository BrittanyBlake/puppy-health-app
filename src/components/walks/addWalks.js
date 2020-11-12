import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addWalks.styles';

const AddWalks = ({ props }) => {
  const classes = useStyles(props);
  const { walkIndex } = useParams();
  const dispatch = useDispatch();

  const [isSubmited, setSubmitted] = useState(false);

  const initialFormState = {
    time: '',
    distance: '',
    date: '',
    user_id: Number(walkIndex),
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
    dispatch(PuppyHealthApi.addWalks(values));
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
            value={values.date}
            name="date"
            type="date"
            id="date"
            autoComplete="date"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.distance}
            name="distance"
            type="number"
            id="distance"
            autoComplete="number"
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

AddWalks.propTypes = {
  props: PropTypes.func,
};

AddWalks.defaultProps = {
  props: () => {},
};

export default AddWalks;
