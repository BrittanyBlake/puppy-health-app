import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import useStyles from './Navbar.styles';

const Navbar = ({ props }) => {
  const classes = useStyles(props);

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Puppy Health App
          </Typography>
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
