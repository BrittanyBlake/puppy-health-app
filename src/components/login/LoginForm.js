import React from 'react';
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
import useStyles from './LoginForm.styles';

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: '#ffffff' }} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Puppy Health Tracker
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LoginForm = ({ props }) => {
  const classes = useStyles(props);

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
            Welcome! Log In to get started
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#2ad042' }}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid item xs>
              <Link href="#/" variant="body2" style={{ color: '#ffffff' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#/" variant="body2" style={{ color: '#ffffff' }}>
                No account? Sign Up
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
LoginForm.propTypes = {
  props: PropTypes.func,
};

LoginForm.defaultProps = {
  props: () => {},
};
export default LoginForm;
