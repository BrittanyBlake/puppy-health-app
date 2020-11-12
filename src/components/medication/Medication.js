import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';

import TrackCard from '../trackCard/trackCard';

const Medication = () => {
  const dispatch = useDispatch();
  const allMedications = useSelector(state => state.medications);
  console.log('medication state', allMedications);

  useEffect(() => {
    const getMedication = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getMedications());
    };
    getMedication();
  }, [dispatch]);

  if (!allMedications) {
    console.log('nada');
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

  return (
    console.log('medications', allMedications),
    (
      <div>
        <Navbar />
        <h1> MEDICATION PAGE</h1>
        {' '}
        {allMedications.map(med => (
          <div key={med.id}>
            <TrackCard date={formatDate(med.date)} />
            {/* <p>
              Date:
              {med.date}
            </p>
            <p>
              Dosage:
              {med.dosage}
            </p>
            <p>
              medicine name:
              {med.name}
            </p>
            <p>
              time:
              {med.time}
            </p>
            <p>
              What is it for?
              {med.use}
          </p> */}
          </div>
        ))}
        <BottomNav addLink="/addmedication" />
      </div>
    )
  );
};

export default Medication;
