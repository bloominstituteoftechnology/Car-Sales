import React from 'react';
import { connect } from 'react-redux'; 
import * as actionCreators from '../state/actionCreators'; 

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={e => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(state => state, actionCreators)(AdditionalFeature); 
