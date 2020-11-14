import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import petfood from '../../assets/images/petfood.png';
import useStyles from './TreatDetail.styles';
import { ReactComponent as Treats } from '../../assets/images/treats.svg';

const TreatDetails = () => {
  const classes = useStyles();
  const { treatDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getTreatDetailsId = useSelector(state => state.treats);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const treatDetailsId = () => {
      dispatch(PuppyHealthApi.getTreatsId(treatDetailsIndex));
    };
    treatDetailsId();
  }, []);

  if (!getTreatDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getTreatDetailsId),
    (
      <div>
        <Navbar />

        <h1 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
          {' '}
          {formatDate(getTreatDetailsId.date)}
        </h1>

        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <h2 className="dogname" style={{ color: '#97E493' }}>
              {' '}
              {getTreatDetailsId.user ? getTreatDetailsId.user.name : ''}
              {' '}
            </h2>
            <Grid container>
              <Grid container item xs={6}>
                <Treats style={{ fill: '#97E493' }} height={200} width={200} />
              </Grid>
              <Grid container item xs={6}>
                <Grid contianer item xs={12}>
                  <small>TREAT</small>
                  <p>{getTreatDetailsId.treat_type}</p>
                </Grid>
                <Grid contianer item xs={12}>
                  <small>AMOUNT</small>
                  <p>
                    {getTreatDetailsId.amount}
                    {' '}
                    grams
                    {' '}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <BottomNav addLink="/addtreat" trackLink="/treats" />
      </div>
    )
  );
};
export default TreatDetails;

TreatDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
TreatDetails.defaultProps = {
  // props: () => {},
};
