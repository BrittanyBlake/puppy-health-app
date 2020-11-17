import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './MedicationDetail.styles';
import { ReactComponent as Medicine } from '../../assets/images/medicine.svg';

const MedicationDetails = ({ getMedicationDetailsId }) => {
  const classes = useStyles();
  const formatDate = datetime => new Date(datetime).toDateString();

  if (!getMedicationDetailsId) {
    return null;
  }

  return (
    (
      <div>
        <Navbar />

        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getMedicationDetailsId.date)}
        </h1>

        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#ED4631' }}>
              {' '}
              {getMedicationDetailsId.user
                ? getMedicationDetailsId.user.name
                : ''}
              {' '}
            </h2>
            <Grid container>
              <Grid container item xs={6}>
                <Medicine
                  style={{ fill: '#ED4631' }}
                  height={200}
                  width={200}
                />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>DOSAGE</small>
                  <p>{getMedicationDetailsId.dosage}</p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>USE</small>
                  <p>{getMedicationDetailsId.use}</p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>MEDICATION NAME</small>
                  <p>{getMedicationDetailsId.name}</p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>TIME</small>
                  <p>{moment(getMedicationDetailsId.time).format('LT')}</p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <BottomNav addLink="/addmedication" trackLink="/medication" />
      </div>
    )
  );
};
export default MedicationDetails;

MedicationDetails.propTypes = {
  getMedicationDetailsId: PropTypes.shape({
    dosage: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
MedicationDetails.defaultProps = {
  getMedicationDetailsId: {},
};
