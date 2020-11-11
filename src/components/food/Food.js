import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';

const Food = () => {
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
    console.log('nada');
    return null;
  }

  return (
    console.log('foods', allFoods),
      <div>
        <Navbar />
        <h1> FOOD PAGE</h1>
        <div>
          {' '}
          {
        allFoods.map(food => (
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
        ))
        }
        </div>
        <BottomNav />
      </div>
  );
};
// Food.propTypes = {
//   props: PropTypes.func,
// };

// Food.defaultProps = {
//   props: () => {},
// };
export default Food;
