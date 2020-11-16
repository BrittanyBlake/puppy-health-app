import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import addWalks from '../../api/walks/addWalks';
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
    dispatch(addWalks(values));
    setSubmitted(true);
  };

  if (isSubmited) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
        Just took your pup on a walk? Track it here...
      </h2>
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
            label="Distance in km"
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
      <BottomNav addLink="/addwalk" trackLink="/walks" />
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
