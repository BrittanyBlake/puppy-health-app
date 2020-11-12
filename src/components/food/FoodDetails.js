import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import PuppyHealthApi from '../../api/healthTracker';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';

const FoodDetails = ({ props }) => (

  <div>
    <Navbar />
    <h1>
      {' '}
      {props}
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
);
export default FoodDetails;

FoodDetails.propTypes = {
  props: PropTypes.func,
};
FoodDetails.defaultProps = {
  props: () => {},
};
