import React from 'react';
import { connect } from 'react-redux'; 
import { subtractFeature  } from '../actions/rootActions';

 
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {props.subtractFeature({id: props.feature.id, price: feature.price})}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { subtractFeature } )(AddedFeature);
