import React from 'react';
// import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import Container from '@material-ui/core/Container';
import Navbar from '../navbar/Navbar';
import CategoryCard from '../categoryCard/categoryCard';
import useStyles from '../categoryCard/categoryCard.styles';

const Profile = ({ props }) => {
  const classes = useStyles(props);
  return (
    <div>
      <Navbar />
      <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
        {' '}
        Choose A Category to Add Some Info About Your Pup
        {' '}
      </h2>
      <Container maxWidth="lg">
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
            <CategoryCard name="Appointments" cardLink="/appointments" />
          </Grid>
        </Grid>
      </Container>
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
