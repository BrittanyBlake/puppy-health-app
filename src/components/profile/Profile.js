import React from 'react';
// import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import CategoryCard from '../categoryCard/categoryCard';
import useStyles from '../categoryCard/categoryCard.styles';

const Profile = ({ props }) => {
  const classes = useStyles(props);
  return (
    <div>
      <Navbar />
      <h1> PROFILE PAGE</h1>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="Food" cardLink="/food" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="Treats" cardLink="/treats" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="Walks" cardLink="/walks" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="Medications" cardLink="/medication" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="General Health" cardLink="/general" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.control}>
          <CategoryCard name="About your pup" cardLink="/about" />
        </Grid>
      </Grid>

      <BottomNav />
    </div>
  );
};

Profile.propTypes = {
  props: PropTypes.func,
  // cardLink: PropTypes.string,
};

Profile.defaultProps = {
  props: () => {},
  // cardLink: '',
};

export default Profile;
