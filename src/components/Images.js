import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Images = props => {
  return props.images.map((image, ind) => (
    <div key={ind} className="fadeIn">
      <div className="delete" onClick={() => props.removeImage(image.public_id)}>
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </div>
      <img src={image.secure_url} alt="" />
    </div>
  ));
};

export default Images;
