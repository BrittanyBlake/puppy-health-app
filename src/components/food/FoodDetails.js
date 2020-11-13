import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';

const FoodDetails = () => {
  const { foodDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getFoodDetailsId = useSelector(state => state.food);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const foodDetailsId = () => {
      dispatch(PuppyHealthApi.getFoodsId(foodDetailsIndex));
    };
    foodDetailsId();
  }, []);

  // dispatch(PuppyHealthApi.getFoodsId());

  // const foodId = computedMatch.params.ood;

  // const foodState = useSelector(state => state.food);

  // React.useEffect(() => {
  //   dispatch(PuppyHealthApi.getFoodsId(foodId));
  // }, []);

  if (!getFoodDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getFoodDetailsId),
    (
      <div>
        <Navbar />
        <h1>
          {' '}
          {formatDate(getFoodDetailsId.date)}
        </h1>

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
export default FoodDetails;

FoodDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
FoodDetails.defaultProps = {
  // props: () => {},
};
