import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Treats = ({ allTreats }) => {
  if (!allTreats) {
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
            How many treats are you feeding your pup?
            {' '}
          </h2>
          {' '}
          {allTreats.length > 0
            && allTreats.map(treat => (
              <div key={treat.id}>
                <Link to={`/treats/${treat.id}`}>
                  <TrackCard date={formatDate(treat.date)} />
                </Link>
              </div>
            ))}
        </div>

        <BottomNav addLink="/addtreat" trackLink="/treats" />
      </div>
    )
  );
};

export default Treats;

Treats.propTypes = {
  allTreats: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
Treats.defaultProps = {
  allTreats: {},
};
