import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addFoods } from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addFoods.styles';

const AddFoods = ({ props }) => {
  const classes = useStyles(props);
  const { FoodIndex } = useParams();
  const dispatch = useDispatch();

  const initialFormState = {
    brand: '',
    amount: '',
    date: '',
    time: '',
    user_id: Number(FoodIndex),
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
    dispatch(addFoods(values));
    setSubmitted(true);
  };

  if (isSubmited) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
        Just fed your pup? Track it here...
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
            value={values.brand}
            label="Food Brand"
            name="brand"
            type="string"
            id="brand"
            autoComplete="string"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.amount}
            label="Amount in grams"
            name="amount"
            type="number"
            id="amount"
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
      <BottomNav addLink="/addfood" trackLink="/food" />
    </div>
  );
};

AddFoods.propTypes = {
  props: PropTypes.func,
};

AddFoods.defaultProps = {
  props: () => {},
};

export default AddFoods;
