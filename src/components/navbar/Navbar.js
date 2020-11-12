import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/index';
import useStyles from './Navbar.styles';

const Navbar = ({ props }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#42B5E8' }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <PetsIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Puppy Health App
          </Typography>
          <Button onClick={Logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  props: PropTypes.func,
};

Navbar.defaultProps = {
  props: () => {},
};

export default Navbar;
