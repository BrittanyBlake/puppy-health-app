import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';

const General = () => {
  const dispatch = useDispatch();
  const allGeneralHealths = useSelector(state => state.generalHealths);
  console.log('health state', allGeneralHealths);

  useEffect(() => {
    const getGeneralHealth = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getGeneralHealths());
    };
    getGeneralHealth();
  }, [dispatch]);

  if (!allGeneralHealths) {
    console.log('nada');
    return null;
  }

  return (
    console.log('generals', allGeneralHealths),
    (
      <div>
        <Navbar />
        <h1> GENERAL PAGE</h1>
        <div>
          {' '}
          { allGeneralHealths.map(health => (
            <div key={health.id}>
              <p>
                Date:
                {health.date}
              </p>
              <p>
                Weight:
                {health.weight}
              </p>
              <p>
                energy level:
                {health.energy_level}
              </p>
              <p>
                hunger level:
                {health.hunger_level}
              </p>
              <p>
                Extra:
                {health.extra}
              </p>
            </div>
          )) }
        </div>
        <BottomNav addLink="/addgeneralhealth" />
      </div>
    )
  );
};

export default General;
