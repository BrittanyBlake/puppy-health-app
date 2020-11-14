import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Treats from '../../components/treats/Treats';

import PuppyHealthApi from '../../api/healthTracker';

const TreatsList = () => {
  const dispatch = useDispatch();
  const allTreats = useSelector(state => state.treats);

  useEffect(() => {
    const getTreat = () => {
      dispatch(PuppyHealthApi.getTreats());
    };
    getTreat();
  }, [dispatch]);

  if (!allTreats) {
    return null;
  }

  return <Treats allTreats={allTreats} />;
};

export default TreatsList;
