import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const General = () => {
  const dispatch = useDispatch();
  const allGeneralHealths = useSelector(state => state.generalHealths);
  console.log('health state', allGeneralHealths);
  const formatDate = datetime => new Date(datetime).toDateString();

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

        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            Let&apos;s see how your pup is doing...
          </h2>
          <div>
            {' '}
            {allGeneralHealths.length > 0
            && allGeneralHealths.map(health => (
              <div key={health.id}>
                <Link to={`/general/${health.id}`}>
                  <TrackCard date={formatDate(health.date)} />
                </Link>

              </div>
            ))}
          </div>

        </div>
        <BottomNav addLink="/addgeneralhealth" trackLink="/general" />
      </div>
    )
  );
};

export default General;
