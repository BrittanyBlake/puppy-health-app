import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Medication = ({ allMedications }) => {
  if (!allMedications) {
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

Medication.propTypes = {
  allMedications: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
Medication.defaultProps = {
  allMedications: {},
};
