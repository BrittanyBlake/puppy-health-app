import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './AppointmentDetail.styles';

import { ReactComponent as AppointmentImg } from '../../assets/images/appointment.svg';

const AppointmentDetails = ({ getAppointmentDetailsId }) => {
  const formatDate = datetime => new Date(datetime).toDateString();

  const classes = useStyles();

  if (!getAppointmentDetailsId) {
    return null;
  }

  return (

    (
      <div>
        <Navbar />
        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getAppointmentDetailsId.date)}
        </h1>

        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#42B5E8' }}>
              {' '}
              {getAppointmentDetailsId.user
                ? getAppointmentDetailsId.user.name
                : ''}
              {' '}
            </h2>
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

AppointmentDetails.propTypes = {
  getAppointmentDetailsId: PropTypes.shape({
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
AppointmentDetails.defaultProps = {
  getAppointmentDetailsId: {},
};
