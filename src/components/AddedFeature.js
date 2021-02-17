import React from 'react';
import { connect } from 'react-redux';

import { deleteFeatures } from '../actions/index';

const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.deleteFeatures(props.feature.id)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};



export default connect(()=>{}, { deleteFeatures })(AddedFeature);
