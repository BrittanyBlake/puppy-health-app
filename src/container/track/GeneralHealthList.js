import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGeneralHealths } from '../../api/healthTracker';
import General from '../../components/general/General';

const GeneralHealthList = () => {
  const dispatch = useDispatch();
  const allGeneralHealths = useSelector(state => state.generalHealths);

  useEffect(() => {
    const getGeneralHealth = () => {
      dispatch(PuppyHealthApi.getGeneralHealths());
    };
    getGeneralHealth();
  }, [dispatch]);

  if (!allGeneralHealths) {
    return null;
  }

  return <General allGeneralHealths={allGeneralHealths} />;
};

export default GeneralHealthList;
