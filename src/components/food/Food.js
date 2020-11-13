import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import Delete from '../delete/Delete';
import TrackCard from '../trackCard/trackCard';

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
    console.log('nada', allFoods);
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();
  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log('deleted');
  // };

  // const handleClick = () => {
  //   console.log('clicked');
  // };

  return (
    console.log('foods', allFoods),
    (
      <div>
        <Navbar />
        <h1> FOOD PAGE</h1>
        <div>
          {' '}
          {allFoods.length > 0
            && allFoods.map(food => (
              <div key={food.id}>
                <Link to={`/food/${food.id}`}>
                  <TrackCard date={formatDate(food.date)} />
                </Link>
                {/*  <p>
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
            <Delete /> */}
              </div>
            ))}
        </div>
        <BottomNav addLink="/addfood" trackLink="/food" />
      </div>
    )
  );
};
// Food.propTypes = {
//   props: PropTypes.func,
// };

// Food.defaultProps = {
//   props: () => {},
// };
export default Food;
