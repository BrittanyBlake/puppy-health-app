import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getFoodsId from '../../api/food/getFoodId';
import FoodDetails from '../../components/food/FoodDetails';

const FoodInfo = () => {
  const { foodDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getFoodDetailsId = useSelector(state => state.food);

  useEffect(() => {
    const foodDetailsId = () => {
      dispatch(getFoodsId(foodDetailsIndex));
    };
    foodDetailsId();
  }, []);

  if (!getFoodDetailsId) {
    return null;
  }

  return <FoodDetails getFoodDetailsId={getFoodDetailsId} />;
};
export default FoodInfo;
