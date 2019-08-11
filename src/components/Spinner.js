import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="spinner fadeIn">
      <FontAwesomeIcon icon={faBowlingBall} size="5x" color="#3b5998" />
    </div>
  );
};

export default Loader;
