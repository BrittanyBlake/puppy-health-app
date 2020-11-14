import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './addGeneralHealths.styles';

const AddGeneralHealths = ({ props }) => {
  const classes = useStyles(props);
  const { GenHealthIndex } = useParams();
  const dispatch = useDispatch();
  const [isSubmited, setSubmitted] = useState(false);

  const initialFormState = {
    weight: '',
    date: '',
    energy_level: '',
    hunger_level: '',
    user_id: Number(GenHealthIndex),
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
    dispatch(PuppyHealthApi.addGeneralHealths(values));
    console.log('added');
    setSubmitted(true);
  };

  if (isSubmited) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
        How is your pup feeling today?
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
            id="weight"
            type="number"
            onChange={handleChange}
            value={values.weight}
            label="Pup's weight"
            name="weight"
            autoComplete="number"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.energy_level}
            label="Energy level"
            name="energy_level"
            type="string"
            id="energy_level"
            autoComplete="string"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            value={values.hunger_level}
            label="Hunger level"
            name="hunger_level"
            type="string"
            id="hunger_level"
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
      <BottomNav addLink="/addgeneralHealth" trackLink="/general" />
    </div>
  );
};

AddGeneralHealths.propTypes = {
  props: PropTypes.func,
};

AddGeneralHealths.defaultProps = {
  props: () => {},
};

export default AddGeneralHealths;
