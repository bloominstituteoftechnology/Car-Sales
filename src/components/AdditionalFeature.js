import React from 'react';
import { addFeature } from '../actions/appActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const {feature, addFeature} = props;

  const handleAddFeature = ()=> {
    addFeature(feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAddFeature} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
