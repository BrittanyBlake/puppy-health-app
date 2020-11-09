import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Copyright from '../copyright/Copyright';
import useStyles from './SignUpForm.styles';
import userPostFetch from '../../redux/actions/index';

const SignUpForm = ({ props }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const initialFormState = {
    name: '',
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialFormState);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userPostFetch(values));
    setValues(initialFormState);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: '#42B5E8' }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: '#ffffff' }}>
            New here? Make an account to get started!
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Pup's Name"
              name="name"
              onChange={handleChange}
              value={values.name}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={values.email}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleChange}
              value={values.password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              onChange={handleChange}
              value={values.password}
              type="password"
              id="password-confirmation"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#97E493' }}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="#/" variant="body2" style={{ color: '#ffffff' }}>
                Already have an account? Sign In
              </Link>
            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
SignUpForm.propTypes = {
  props: PropTypes.func,
};

SignUpForm.defaultProps = {
  props: () => {},
};
export default SignUpForm;
