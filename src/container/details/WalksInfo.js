import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWalksId } from '../../api/healthTracker';
import WalkDetails from '../../components/walks/WalkDetails';

const Walksinfo = () => {
  const { walkDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getWalkDetailsId = useSelector(state => state.walks);

  useEffect(() => {
    const walkDetailsId = () => {
      dispatch(PuppyHealthApi.getWalksId(walkDetailsIndex));
    };
    walkDetailsId();
  }, []);

  if (!getWalkDetailsId) {
    return null;
  }

  return <WalkDetails getWalkDetailsId={getWalkDetailsId} />;
};
export default Walksinfo;
