import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import moment from 'moment';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import petfood from '../../assets/images/petfood.png';
import { ReactComponent as HealthImg } from '../../assets/images/heartbeat.svg';

const GeneralDetails = () => {
  const { generalDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getGeneralDetailsId = useSelector(state => state.generalHealths);
  const formatDate = datetime => new Date(datetime).toDateString();

  useEffect(() => {
    const generalDetailsId = () => {
      dispatch(PuppyHealthApi.getGeneralHealthsId(generalDetailsIndex));
    };
    generalDetailsId();
  }, []);

  // dispatch(PuppyHealthApi.getFoodsId());

  // const foodId = computedMatch.params.ood;

  // const foodState = useSelector(state => state.food);

  // React.useEffect(() => {
  //   dispatch(PuppyHealthApi.getFoodsId(foodId));
  // }, []);

  if (!getGeneralDetailsId) {
    console.log('nada');
    return null;
  }

  return (
    console.log('data:', getGeneralDetailsId),
    (
      <div>
        <Navbar />
        {/* <img src={petfood} alt="food" style={{ fill: "#97E493" }} /> */}
        <HealthImg style={{ fill: '#ED4631' }} height={200} width={200} />
        <h1>
          {' '}
          {formatDate(getGeneralDetailsId.date)}
        </h1>
        <p>ENERGY LEVEL</p>
        <p>
          {getGeneralDetailsId.energy_level}
          {' '}
        </p>
        <p>HUNGER LEVEL</p>
        <p>
          {getGeneralDetailsId.hunger_level}
          {' '}
        </p>
        <p>{getGeneralDetailsId.extra}</p>
        <p>Weight</p>
        <p>
          {getGeneralDetailsId.weight}
          {' '}
          KG
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
        <BottomNav addLink="/addfood" />
      </div>
    )
  );
};
export default GeneralDetails;

GeneralDetails.propTypes = {
  // props: PropTypes.func,
  // computedMatch: PropTypes.shape({
  //   params: PropTypes.shape({
  //     food: PropTypes.string.isRequired,
  //   }),
  // }),
};
GeneralDetails.defaultProps = {
  // props: () => {},
};
