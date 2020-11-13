import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import moment from 'moment';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import petfood from '../../assets/images/petfood.png';
import { ReactComponent as Medicine } from '../../assets/images/medicine.svg';

const MedicationDetails = () => {
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

  // dispatch(PuppyHealthApi.getMedicationsId());

  // const foodId = computedMatch.params.ood;

  // const foodState = useSelector(state => state.food);

  // React.useEffect(() => {
  //   dispatch(PuppyHealthApi.getMedicationsId(foodId));
  // }, []);

  if (!getMedicationDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getMedicationDetailsId),
    (
      <div>
        <Navbar />
        {/* <img src={petfood} alt="food" style={{ fill: "#97E493" }} /> */}
        <Medicine style={{ fill: '#ED4631' }} height={200} width={200} />
        <h1>
          {' '}
          {formatDate(getMedicationDetailsId.date)}
        </h1>
        <p>DOSAGE</p>
        <p>
          {getMedicationDetailsId.dosage}
          {' '}
        </p>
        <p>USE</p>
        <p>
          {getMedicationDetailsId.use}
          {' '}
        </p>
        <p>NAME</p>
        <p>
          {getMedicationDetailsId.name}
          {' '}
          grams
          {' '}
        </p>
        <p>TIME</p>
        <p>
          {moment(getMedicationDetailsId.time).format('LT')}
          {' '}
        </p>

        {/* <div>
        {' '}
        {allFoods.map(food => (
          <div key={food.id}>
            <p>
              Brand:
              {food.brand}
            </p>
            <p>
              Amount:
              {food.amount}
            </p>
            <p>
              time:
              {food.time}
            </p>
            <p>
              date:
              {food.date}
            </p>
          </div>
        ))}
        </div> */}
        <BottomNav addLink="/addfood" trackLink="/food" />
      </div>
    )
  );
};
export default MedicationDetails;

MedicationDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
MedicationDetails.defaultProps = {
  // props: () => {},
};
