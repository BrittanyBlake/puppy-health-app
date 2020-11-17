import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const General = ({ allGeneralHealths }) => {
  const formatDate = datetime => new Date(datetime).toDateString();

  if (!allGeneralHealths) {
    return null;
  }

  return (
    (
      <div>
        <Navbar />

        <div className="marginBottom">
          <h2 style={{ color: 'GrayText', fontFamily: 'Helvetica Neue' }}>
            {' '}
            Let&apos;s see how your pup is doing...
          </h2>
          <div>
            {' '}
            {allGeneralHealths.length > 0
              && allGeneralHealths.map(health => (
                <div key={health.id}>
                  <Link to={`/general/${health.id}`}>
                    <TrackCard date={formatDate(health.date)} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <BottomNav addLink="/addgeneralhealth" trackLink="/general" />
      </div>
    )
  );
};

export default General;

General.propTypes = {
  allGeneralHealths: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
General.defaultProps = {
  allGeneralHealths: {},
};
