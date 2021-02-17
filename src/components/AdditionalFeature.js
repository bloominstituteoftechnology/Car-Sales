import React from 'react';
import{connect} from 'react-redux'
import {addFeature} from '../actions'

const AdditionalFeature = ({addFeature, feature}) => {
const handleClick = e => {
    addFeature(feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
