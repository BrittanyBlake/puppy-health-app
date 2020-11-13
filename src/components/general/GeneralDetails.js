import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import petfood from '../../assets/images/petfood.png';
import useStyles from './GeneralDetail.styles';
import { ReactComponent as HealthImg } from '../../assets/images/heartbeat.svg';

const GeneralDetails = () => {
  const classes = useStyles();
  const { generalDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getGeneralDetailsId = useSelector(state => state.generalHealths);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const generalDetailsId = () => {
      dispatch(PuppyHealthApi.getGeneralHealthsId(generalDetailsIndex));
    };
    generalDetailsId();
  }, []);

  if (!getGeneralDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getGeneralDetailsId),
    (
      <div>
        <Navbar />
        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getGeneralDetailsId.date)}
        </h1>
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <Grid container>
              <Grid container item xs={6}>
                <HealthImg
                  style={{ fill: '#ED4631' }}
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>ENERGY LEVEL</small>
                  <p>
                    {getGeneralDetailsId.energy_level}
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>HUNGER LEVEL</small>
                  <p>
                    {getGeneralDetailsId.hunger_level}
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>WEIGHT</small>
                  <p>
                    {getGeneralDetailsId.weight}
                    {' '}
                    KG
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>{getGeneralDetailsId.extra}</small>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <BottomNav addLink="/addgeneralHealth" trackLink="/general" />
      </div>
    )
  );
};
export default GeneralDetails;

GeneralDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
GeneralDetails.defaultProps = {
  // props: () => {},
};
