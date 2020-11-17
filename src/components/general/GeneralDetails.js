import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './GeneralDetail.styles';
import { ReactComponent as HealthImg } from '../../assets/images/heartbeat.svg';

const GeneralDetails = ({ getGeneralDetailsId }) => {
  const classes = useStyles();

  const formatDate = datetime => new Date(datetime).toDateString();

  if (!getGeneralDetailsId) {
    return null;
  }

  return (

    (
      <div>
        <Navbar />
        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getGeneralDetailsId.date)}
        </h1>
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#ED4631' }}>
              {' '}
              {getGeneralDetailsId.user
                ? getGeneralDetailsId.user.name
                : ''}
              {' '}
            </h2>
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
  getGeneralDetailsId: PropTypes.shape({
    date: PropTypes.string.isRequired,
    energy_level: PropTypes.string.isRequired,
    hunger_level: PropTypes.string.isRequired,
    extra: PropTypes.string,
    weight: PropTypes.number.isRequired,
    user: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
GeneralDetails.defaultProps = {
  getGeneralDetailsId: {},
};
