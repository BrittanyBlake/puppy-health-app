import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <h1> TREATS PAGE</h1>
        {' '}
        {allTreats.map(treat => (
          <div key={treat.id}>
            <TrackCard date={formatDate(treat.date)} />
            {/* <p>
              Amount:
              {treat.amount}
            </p>
            <p>
              date:
              {treat.date}
            </p>
            <p>
              treat name:
              {treat.treat_type}
           </p> */}
          </div>
        ))}
        <BottomNav addLink="/addtreat" />
      </div>
    )
  );
};

export default Treats;
