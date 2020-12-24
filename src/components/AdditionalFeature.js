import React from 'react';
import { connect } from 'react-redux'
import { buyItem } from '../actions/carActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buyItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyItem })(AdditionalFeature);
