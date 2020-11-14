import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './FoodDetail.styles';
import { ReactComponent as FoodImg } from '../../assets/images/pet-food.svg';

const FoodDetails = ({ getFoodDetailsId }) => {
  const formatDate = datetime => new Date(datetime).toDateString();
  const classes = useStyles();

  if (!getFoodDetailsId) {
    return null;
  }

  return (
    (
      <div>
        <Navbar />
        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getFoodDetailsId.date)}
        </h1>

        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#42B5E8' }}>
              {' '}
              {getFoodDetailsId.user ? getFoodDetailsId.user.name : ''}
              {' '}
            </h2>
            <Grid container>
              <Grid container item xs={6}>
                <FoodImg style={{ fill: '#42B5E8' }} height={200} width={200} />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>BRAND</small>
                  <p>
                    {getFoodDetailsId.brand}
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>AMOUNT</small>
                  <p>
                    {getFoodDetailsId.amount}
                    {' '}
                    grams
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>TIME</small>
                  <p>
                    {moment(getFoodDetailsId.time).format('LT')}
                    {' '}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <BottomNav addLink="/addfood" trackLink="/food" />
      </div>
    )
  );
};
export default FoodDetails;

FoodDetails.propTypes = {
  getFoodDetailsId: PropTypes.shape({
    date: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
FoodDetails.defaultProps = {
  getFoodDetailsId: {},
};
