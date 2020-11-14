import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './WalkDetail.styles';
import { ReactComponent as DogWalking } from '../../assets/images/dog-walking.svg';

const WalkDetails = ({ getWalkDetailsId }) => {
  const classes = useStyles();

  const formatDate = datetime => new Date(datetime).toDateString();

  if (!getWalkDetailsId) {
    return null;
  }

  return (
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
  getWalkDetailsId: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
WalkDetails.defaultProps = {
  getWalkDetailsId: [],
};
