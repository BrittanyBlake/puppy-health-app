import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Appointments = ({ allAppointments }) => {
  if (!allAppointments) {
    return null;
  }

  const formatDate = datetime => new Date(datetime).toDateString();

  return (
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

Appointments.propTypes = {
  allAppointments: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
Appointments.defaultProps = {
  allAppointments: {},
};
