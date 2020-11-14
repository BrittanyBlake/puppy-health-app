import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
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
    console.log('user', allFoods),
    (
      <div>
        <Navbar />
        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            Let&apos;s see how much your pup is eating...
          </h2>
          <div>
            {' '}
            {allFoods.length > 0
              && allFoods.map(food => (
                <div key={food.id}>
                  <Link to={`/food/${food.id}`}>
                    <TrackCard date={formatDate(food.date)} />
                  </Link>
                </div>
              ))}
          </div>
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
