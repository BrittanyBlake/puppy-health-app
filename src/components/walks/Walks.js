import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Walks = () => {
  const dispatch = useDispatch();
  const allWalks = useSelector(state => state.walks);
  console.log('walk state', allWalks);

  useEffect(() => {
    const getWalk = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getWalks());
    };
    getWalk();
  }, [dispatch]);

  if (!allWalks) {
    console.log('nada');
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

  return (
    console.log('walks', allWalks),
    (
      <div>
        <Navbar />
        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            Is your pup getting enough exercise?
            {' '}
          </h2>
          {' '}
          {allWalks.length > 0
            && allWalks.map(walk => (
              <div key={walk.id}>
                <Link to={`/walks/${walk.id}`}>
                  <TrackCard date={formatDate(walk.date)} />
                </Link>
              </div>
            ))}
        </div>
        <BottomNav addLink="/addwalk" trackLink="/walks" />
      </div>
    )
  );
};

export default Walks;
