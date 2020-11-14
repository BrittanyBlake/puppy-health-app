import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './FoodDetail.styles';
// import petfood from '../../assets/images/petfood.png';

import { ReactComponent as FoodImg } from '../../assets/images/pet-food.svg';

const FoodDetails = () => {
  const { foodDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getFoodDetailsId = useSelector(state => state.food);
  const formatDate = datetime => new Date(datetime).toDateString();
  console.log('details', getFoodDetailsId);

  const classes = useStyles();

  useEffect(() => {
    const foodDetailsId = () => {
      dispatch(PuppyHealthApi.getFoodsId(foodDetailsIndex));
    };
    foodDetailsId();
  }, []);

  if (!getFoodDetailsId) {
    console.log('nada');
    return null;
  }

  // console.log('username', getFoodDetailsId.user.name);

  return (
    console.log('data:', getFoodDetailsId),
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
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
FoodDetails.defaultProps = {
  // props: () => {},
};
