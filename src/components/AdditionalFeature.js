import React from 'react';
import { buyCarPart } from '../actions';
import { connect } from 'tls';

const AdditionalFeature = props => {
  const buyPart = part => {
    buyCarPart(part);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick{()=> buyPart(props.feature)}>
      Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { buyCarPart }
)(AdditionalFeature);
