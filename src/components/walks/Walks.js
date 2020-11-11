import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
// import { addWalks } from '../../redux/actions';

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

  return (
    console.log('walks', allWalks),
    (
      <div>
        <Navbar />
        <h1> WALKS PAGE</h1>
        {' '}
        {allWalks.map(walk => (
          <div key={walk.id}>
            <p>
              distance:
              {walk.distance}
            </p>
            <p>
              date:
              {walk.date}
            </p>
            <p>
              time:
              {walk.time}
            </p>
          </div>
        ))}
        <BottomNav props="/addwalk" />
      </div>
    )
  );
};

export default Walks;
