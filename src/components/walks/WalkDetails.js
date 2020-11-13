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
import { ReactComponent as DogWalking } from '../../assets/images/dog-walking.svg';

const WalkDetails = () => {
  const { walkDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getWalkDetailsId = useSelector(state => state.walks);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const walkDetailsId = () => {
      dispatch(PuppyHealthApi.getWalksId(walkDetailsIndex));
    };
    walkDetailsId();
  }, []);

  // dispatch(PuppyHealthApi.getFoodsId());

  // const foodId = computedMatch.params.ood;

  // const foodState = useSelector(state => state.food);

  // React.useEffect(() => {
  //   dispatch(PuppyHealthApi.getFoodsId(foodId));
  // }, []);

  if (!getWalkDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getWalkDetailsId),
    (
      <div>
        <Navbar />
        <DogWalking style={{ fill: '#42B5E8' }} height={150} width={150} />
        <h1>
          {' '}
          {formatDate(getWalkDetailsId.date)}
        </h1>
        <p>DISTANCE</p>
        <p>
          {getWalkDetailsId.distance}
          {' '}
          KM
          {' '}
        </p>
        <p>TIME</p>
        <p>
          {moment(getWalkDetailsId.time).format('LT')}
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
        <BottomNav addLink="/addtreat" trackLink="/treats" />
      </div>
    )
  );
};
export default WalkDetails;

WalkDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
WalkDetails.defaultProps = {
  // props: () => {},
};
