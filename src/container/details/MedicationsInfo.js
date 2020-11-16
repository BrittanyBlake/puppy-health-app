import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getMedicationsId from '../../api/medication/medicationId';
import MedicationDetails from '../../components/medication/MedicationDetails';

const MedicationsInfo = () => {
  const { medicationDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getMedicationDetailsId = useSelector(state => state.medications);

  useEffect(() => {
    const medicationDetailsId = () => {
      dispatch(getMedicationsId(medicationDetailsIndex));
    };
    medicationDetailsId();
  }, []);

  if (!getMedicationDetailsId) {
    return null;
  }

  return <MedicationDetails getMedicationDetailsId={getMedicationDetailsId} />;
};
export default MedicationsInfo;
