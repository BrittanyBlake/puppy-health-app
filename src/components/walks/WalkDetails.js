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
import useStyles from './WalkDetail.styles';
// import petfood from '../../assets/images/petfood.png';
import { ReactComponent as DogWalking } from '../../assets/images/dog-walking.svg';

const WalkDetails = () => {
  const classes = useStyles();
  const { walkDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getWalkDetailsId = useSelector(state => state.walks);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const walkDetailsId = () => {
      dispatch(PuppyHealthApi.getWalksId(walkDetailsIndex));
    };
    walkDetailsId();
  }, []);

  if (!getWalkDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getWalkDetailsId),
    (
      <div>
        <Navbar />

        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getWalkDetailsId.date)}
        </h1>
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#97E493' }}>
              {' '}
              {getWalkDetailsId.user ? getWalkDetailsId.user.name : ''}
              {' '}
            </h2>
            <Grid container>
              <Grid container item xs={6}>
                <DogWalking
                  style={{ fill: '#97E493' }}
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>DISTANCE</small>
                  <p>
                    {getWalkDetailsId.distance}
                    {' '}
                    KM
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>TIME</small>
                  <p>
                    {moment(getWalkDetailsId.time).format('LT')}
                    {' '}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <BottomNav addLink="/addwalk" trackLink="/walks" />
      </div>
    )
  );
};
export default WalkDetails;

WalkDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
WalkDetails.defaultProps = {
  // props: () => {},
};
