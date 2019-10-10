import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreator';

export const AdditionalFeature = ({feature, addFeature}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addFeature(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(
  state => state, 
  actionCreators,
)
(AdditionalFeature);
