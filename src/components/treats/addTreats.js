import React, { useState } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addTreats.styles';

const AddTreats = ({ props }) => {
  const classes = useStyles(props);
  const { TreatIndex } = useParams();
  const dispatch = useDispatch();
  const [isSubmited, setSubmitted] = useState(false);

  const initialFormState = {
    amount: '',
    treat_type: '',
    date: '',
    user_id: Number(TreatIndex),
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
    dispatch(PuppyHealthApi.addTreats(values));
    console.log('added');
    setSubmitted(true);
  };

     if (isSubmited) {
       //redirect to the tracking page when implemented
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
            onChange={handleChange}
            value={values.amount}
            name="amount"
            type="number"
            id="amount"
            autoComplete="number"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.treat_type}
            name="treat_type"
            type="string"
            id="treat_type"
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

AddTreats.propTypes = {
  props: PropTypes.func,
};

AddTreats.defaultProps = {
  props: () => {},
};

export default AddTreats;
