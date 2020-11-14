import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PuppyHealthApi from '../../api/healthTracker';
import Food from '../../components/food/Food';

const FoodList = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector(state => state.food);
  console.log('food state', allFoods);
  useEffect(() => {
    const getFood = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getFoods());
    };
    getFood();
  }, [dispatch]);

  if (!allFoods) {
    console.log('nada', allFoods);
    return null;
  }

  return <Food allFoods={allFoods} />;
};

export default FoodList;
