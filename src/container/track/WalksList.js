import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getWalks from '../../api/walks/walks';
import Walks from '../../components/walks/Walks';

const WalksList = () => {
  const dispatch = useDispatch();
  const allWalks = useSelector(state => state.walks);

  useEffect(() => {
    const getWalk = () => {
      dispatch(getWalks());
    };
    getWalk();
  }, [dispatch]);

  if (!allWalks) {
    return null;
  }

  return <Walks allWalks={allWalks} />;
};

export default WalksList;
