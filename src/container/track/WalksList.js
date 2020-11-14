import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PuppyHealthApi from '../../api/healthTracker';
import Walks from '../../components/walks/Walks';

const WalksList = () => {
  const dispatch = useDispatch();
  const allWalks = useSelector(state => state.walks);

  useEffect(() => {
    const getWalk = () => {
      dispatch(PuppyHealthApi.getWalks());
    };
    getWalk();
  }, [dispatch]);

  if (!allWalks) {
    return null;
  }

  return <Walks allWalks={allWalks} />;
};

export default WalksList;