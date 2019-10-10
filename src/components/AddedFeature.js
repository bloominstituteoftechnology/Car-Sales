import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreator';

const AddedFeature = ({feature, deleteFeature}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => deleteFeature(feature)}  className="button">X</button>
      {feature.name}
    </li>
  );
};

// Syntaxe: export connect(state, actioncreators)(component)
export default connect(
  state => state, 
  actionCreators,
  )
  (AddedFeature);
