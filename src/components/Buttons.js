import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons';

const Buttons = props => {
  return (
    <div className="buttons fadeIn">
      <div className="button">
        <label htmlFor="single">
          <FontAwesomeIcon icon={faImage} color="#3b5998" size="10x" />
        </label>
        <input type="file" id="single" onChange={props.onChange} />
      </div>

      <div className="button">
        <label htmlFor="multi">
          <FontAwesomeIcon icon={faImages} color="#3b5998" size="10x" />
        </label>
        <input type="file" multiple id="multi" onChange={props.onChange} />
      </div>
    </div>
  );
};

export default Buttons;
