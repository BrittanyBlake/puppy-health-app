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
import { ReactComponent as FoodImg } from '../../assets/images/pet-food.svg';

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
        {/* <img src={petfood} alt="food" style={{ fill: "#97E493" }} /> */}
        <FoodImg style={{ fill: '#42B5E8' }} height={200} width={200} />
        <h1>
          {' '}
          {formatDate(getFoodDetailsId.date)}
        </h1>
        <p>BRAND</p>
        <p>
          {getFoodDetailsId.brand}
          {' '}
        </p>
        <p>AMOUNT</p>
        <p>
          {getFoodDetailsId.amount}
          {' '}
          grams
          {' '}
        </p>
        <p>TIME</p>
        <p>
          {moment(getFoodDetailsId.time).format('LT')}
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
