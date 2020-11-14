import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Treats from '../../components/treats/Treats';

import PuppyHealthApi from '../../api/healthTracker';

const TreatsList = () => {
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

  return <Treats allTreats={allTreats} />;
};

export default TreatsList;
