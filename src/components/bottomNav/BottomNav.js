import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Link } from 'react-router-dom';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import PropTypes from 'prop-types';
import useStyles from './BottomNav.styles';

const BottomNavbar = ({ props, addLink, trackLink }) => {
  const classes = useStyles(props);
  const [value, setValue] = React.useState('Add');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <Link to={addLink}>
        <BottomNavigationAction
          label="Add"
          value="Add"
          icon={<PlaylistAddIcon />}
          style={{ color: 'white' }}
        />
      </Link>
      <Link to={trackLink}>
        <BottomNavigationAction
          label="Track"
          value="track"
          icon={<TrendingUpIcon />}
          style={{ color: 'white' }}
        />
      </Link>

      <BottomNavigationAction
        label="Progress"
        value="progress"
        icon={<PieChartIcon />}
        style={{ color: 'white' }}
      />
      <Link to="/">
        <BottomNavigationAction
          label="more"
          value="more"
          icon={<MoreHorizIcon />}
          style={{ color: 'white' }}
        />
      </Link>
    </BottomNavigation>
  );
};

BottomNavbar.propTypes = {
  props: PropTypes.func,
  addLink: PropTypes.string,
  trackLink: PropTypes.string,
};

BottomNavbar.defaultProps = {
  props: () => {},
  addLink: '',
  trackLink: '',
};
export default BottomNavbar;
