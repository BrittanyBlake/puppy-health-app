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
import useStyles from './AppointmentDetail.styles';

import { ReactComponent as AppointmentImg } from '../../assets/images/appointment.svg';

const AppointmentDetails = () => {
  const { appointmentDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getAppointmentDetailsId = useSelector(state => state.appointments);
  const formatDate = datetime => new Date(datetime).toDateString();
  console.log('details', getAppointmentDetailsId);

  const classes = useStyles();

  useEffect(() => {
    const appointmentDetailsId = () => {
      dispatch(PuppyHealthApi.getAppointmentsId(appointmentDetailsIndex));
    };
    appointmentDetailsId();
  }, []);

  if (!getAppointmentDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getAppointmentDetailsId),
    (
      <div>
        <Navbar />
        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getAppointmentDetailsId.date)}
        </h1>

        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <Grid container>
              <Grid container item xs={6}>
                <AppointmentImg
                  style={{ fill: '#42B5E8' }}
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>LOCATION</small>
                  <p>{getAppointmentDetailsId.location}</p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>TYPE OF APPOINTMENT</small>
                  {' '}
                  <p>
                    {getAppointmentDetailsId.appt_type}
                    {' '}
                  </p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>TIME</small>
                  <p>
                    {moment(getAppointmentDetailsId.time).format('LT')}
                    {' '}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <BottomNav addLink="/newappointments" trackLink="/appointments" />
      </div>
    )
  );
};
export default AppointmentDetails;
