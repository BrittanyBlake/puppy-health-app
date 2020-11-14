import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import useStyles from './MedicationDetail.styles';
import { ReactComponent as Medicine } from '../../assets/images/medicine.svg';

const MedicationDetails = () => {
  const classes = useStyles();
  const { medicationDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getMedicationDetailsId = useSelector(state => state.medications);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const medicationDetailsId = () => {
      dispatch(PuppyHealthApi.getMedicationsId(medicationDetailsIndex));
    };
    medicationDetailsId();
  }, []);

  if (!getMedicationDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getMedicationDetailsId),
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
