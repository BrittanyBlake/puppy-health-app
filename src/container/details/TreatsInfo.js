import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTreatsId } from '../../api/healthTracker';
import TreatDetails from '../../components/treats/TreatDetails';

const TreatsInfo = () => {
  const { treatDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getTreatDetailsId = useSelector(state => state.treats);

  useEffect(() => {
    const treatDetailsId = () => {
      dispatch(PuppyHealthApi.getTreatsId(treatDetailsIndex));
    };
    treatDetailsId();
  }, []);

  if (!getTreatDetailsId) {
    return null;
  }

  return <TreatDetails getTreatDetailsId={getTreatDetailsId} />;
};
export default TreatsInfo;
