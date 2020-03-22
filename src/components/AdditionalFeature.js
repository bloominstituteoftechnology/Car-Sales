import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions/actions'
import { updateTotal } from '../actions/actions'


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {props.buyItem(props.feature);
      props.updateTotal(props.feature.price);
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {buyItem, updateTotal})(AdditionalFeature)
