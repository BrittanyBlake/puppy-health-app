import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGeneralHealthsId } from '../../api/healthTracker';
import GeneralDetails from '../../components/general/GeneralDetails';

const GeneralHealthInfo = () => {
  const { generalDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getGeneralDetailsId = useSelector(state => state.generalHealths);

  useEffect(() => {
    const generalDetailsId = () => {
      dispatch(getGeneralHealthsId(generalDetailsIndex));
    };
    generalDetailsId();
  }, []);

  if (!getGeneralDetailsId) {
    return null;
  }

  return <GeneralDetails getGeneralDetailsId={getGeneralDetailsId} />;
};
export default GeneralHealthInfo;
