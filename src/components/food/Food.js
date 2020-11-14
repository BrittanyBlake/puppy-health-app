import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Food = ({ allFoods }) => {
  if (!allFoods) {
    console.log('nada', allFoods);
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

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

export default Food;

Food.propTypes = {
  allFoods: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
Food.defaultProps = {
  allFoods: {},
};
