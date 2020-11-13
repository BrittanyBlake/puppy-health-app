import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import petfood from '../../assets/images/petfood.png';
import { ReactComponent as Treats } from '../../assets/images/treats.svg';

const TreatDetails = () => {
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

  // dispatch(PuppyHealthApi.getFoodsId());

  // const foodId = computedMatch.params.ood;

  // const foodState = useSelector(state => state.food);

  // React.useEffect(() => {
  //   dispatch(PuppyHealthApi.getFoodsId(foodId));
  // }, []);

  if (!getTreatDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getTreatDetailsId),
    (
      <div>
        <Navbar />
        <Treats style={{ fill: '#97E493' }} height={200} width={200} />
        <h1>
          {' '}
          {formatDate(getTreatDetailsId.date)}
        </h1>
        <p>Treat</p>
        <p>
          {getTreatDetailsId.treat_type}
          {' '}
        </p>
        <p>AMOUNT</p>
        <p>
          {getTreatDetailsId.amount}
          {' '}
          grams
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
        <BottomNav addLink="/addfood" />
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
