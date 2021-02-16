import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions'

const AdditionalFeature = props => {
  const { feature, addFeature } = props;

  const handleClick = () => {
    addFeature(feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
