import React from 'react';
import { buyItem } from './actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)
  console.log(buyItem)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {buyItem(props.feature)}} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(()=>{},{buyItem})(AdditionalFeature);
