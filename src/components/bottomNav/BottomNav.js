import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import PropTypes from 'prop-types';
import useStyles from './BottomNav.styles';

const BottomNavbar = ({ props }) => {
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
      <BottomNavigationAction
        label="Add"
        value="Add"
        icon={<PlaylistAddIcon />}
        style={{ color: 'white' }}
      />
      <BottomNavigationAction
        label="Track"
        value="track"
        icon={<TrendingUpIcon />}
        style={{ color: 'white' }}
      />
      <BottomNavigationAction
        label="Progress"
        value="progress"
        icon={<PieChartIcon />}
        style={{ color: 'white' }}
      />
      <BottomNavigationAction
        label="more"
        value="more"
        icon={<MoreHorizIcon />}
        style={{ color: 'white' }}
      />
    </BottomNavigation>
  );
};

BottomNavbar.propTypes = {
  props: PropTypes.func,
};

BottomNavbar.defaultProps = {
  props: () => {},
};
export default BottomNavbar;
