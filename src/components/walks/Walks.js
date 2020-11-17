import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import BottomNav from '../bottomNav/BottomNav';
import TrackCard from '../trackCard/trackCard';

const Walks = ({ allWalks }) => {
  if (!allWalks) {
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
            Is your pup getting enough exercise?
            {' '}
          </h2>
          {' '}
          {allWalks.length > 0
            && allWalks.map(walk => (
              <div key={walk.id}>
                <Link to={`/walks/${walk.id}`}>
                  <TrackCard date={formatDate(walk.date)} />
                </Link>
              </div>
            ))}
        </div>
        <BottomNav addLink="/addwalk" trackLink="/walks" />
      </div>
    )
  );
};

export default Walks;

Walks.propTypes = {
  allWalks: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
Walks.defaultProps = {
  allWalks: {},
};
