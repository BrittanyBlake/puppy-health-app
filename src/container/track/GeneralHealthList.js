import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGeneralHealths from '../../api/generalHealth/getGeneralHealth';
import General from '../../components/general/General';

const GeneralHealthList = () => {
  const dispatch = useDispatch();
  const allGeneralHealths = useSelector(state => state.generalHealths);

  useEffect(() => {
    const getGeneralHealth = () => {
      dispatch(getGeneralHealths());
    };
    getGeneralHealth();
  }, [dispatch]);

  if (!allGeneralHealths) {
    return null;
  }

  return <General allGeneralHealths={allGeneralHealths} />;
};

export default GeneralHealthList;
