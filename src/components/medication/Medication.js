import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            What Medicine is your pup taking?
            {' '}
          </h2>
          {' '}
          {allMedications.length > 0
            && allMedications.map(med => (
              <div key={med.id}>
                <Link to={`/medication/${med.id}`}>
                  <TrackCard date={formatDate(med.date)} />
                </Link>
              </div>
            ))}
        </div>

        <BottomNav addLink="/addmedication" trackLink="medication" />
      </div>
    )
  );
};

export default Medication;
