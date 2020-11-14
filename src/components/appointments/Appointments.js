import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PuppyHealthApi from '../../api/healthTracker';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Appointments = () => {
  const dispatch = useDispatch();
  const allAppointments = useSelector(state => state.appointments);
  console.log('appt state', allAppointments);

  useEffect(() => {
    const getAppointment = () => {
      console.log('hi');
      dispatch(PuppyHealthApi.getAppointments());
    };
    getAppointment();
  }, [dispatch]);

  if (!allAppointments) {
    console.log('nada');
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

  return (
    console.log('appts', allAppointments),
    (
      <div>

        <Navbar />
        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            Any important appointments coming up?
            {' '}
          </h2>
          {' '}
          {allAppointments.length > 0
          && allAppointments.map(appt => (
            <div key={appt.id}>
              <Link to={`/appointments/${appt.id}`}>
                <TrackCard date={formatDate(appt.date)} />
              </Link>
            </div>
          ))}
        </div>

        <BottomNav addLink="/newappointments" trackLink="/appointments" />
      </div>
    )
  );
};

export default Appointments;
