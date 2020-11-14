import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Treats = () => {
  const dispatch = useDispatch();
  const allTreats = useSelector(state => state.treats);
  console.log('treat state', allTreats);

  useEffect(() => {
    const getTreat = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getTreats());
    };
    getTreat();
  }, [dispatch]);

  if (!allTreats) {
    console.log('nada');
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

  return (
    console.log('treats', allTreats),
    (
      <div>
        <Navbar />
        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            How many treats are you feeding your pup?
            {' '}
          </h2>
          {' '}
          {allTreats.length > 0
            && allTreats.map(treat => (
              <div key={treat.id}>
                <Link to={`/treats/${treat.id}`}>
                  <TrackCard date={formatDate(treat.date)} />
                </Link>
              </div>
            ))}
        </div>

        <BottomNav addLink="/addtreat" trackLink="/treats" />
      </div>
    )
  );
};

export default Treats;
