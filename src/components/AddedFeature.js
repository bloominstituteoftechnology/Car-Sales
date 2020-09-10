import React from 'react';
import { connect } from 'react-redux'
import { deleteFeature } from '../actions/featureActions'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.deleteFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { deleteFeature })(AddedFeature);
