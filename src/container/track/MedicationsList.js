import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMedications } from '../../api/healthTracker';
import Medication from '../../components/medication/Medication';

const MedicationList = () => {
  const dispatch = useDispatch();
  const allMedications = useSelector(state => state.medications);

  useEffect(() => {
    const getMedication = () => {
      dispatch(getMedications());
    };
    getMedication();
  }, [dispatch]);

  if (!allMedications) {
    return null;
  }

  return <Medication allMedications={allMedications} />;
};

export default MedicationList;
