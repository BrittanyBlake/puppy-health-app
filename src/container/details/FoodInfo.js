import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import FoodDetails from '../../components/food/FoodDetails';

const FoodInfo = () => {
  const { foodDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getFoodDetailsId = useSelector(state => state.food);

  useEffect(() => {
    const foodDetailsId = () => {
      dispatch(PuppyHealthApi.getFoodsId(foodDetailsIndex));
    };
    foodDetailsId();
  }, []);

  if (!getFoodDetailsId) {
    console.log('nada');
    return null;
  }

  return <FoodDetails getFoodDetailsId={getFoodDetailsId} />;
};
export default FoodInfo;
