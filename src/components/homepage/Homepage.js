import React from 'react';
import PropTypes from 'prop-types';

function Homepage({ props }) {
  console.log(props);
  return (
    <div>
      <h1> WELCOME USER</h1>

    </div>
  );
}
Homepage.propTypes = {
  props: PropTypes.func,
};

Homepage.defaultProps = {
  props: () => {},
};
export default Homepage;
