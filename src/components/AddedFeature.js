import React from 'react';
import { removeFeature } from '../actions/featuresActions'
import { connect } from 'react-redux';


const AddedFeature = props => {

  console.log('PROPS',props);
  const handleRemoveFeature = (event) => {
    event.preventDefault();
    console.log("feature to be removed: ", props.feature)
    props.removeFeature(props.feature)

  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { removeFeature })(AddedFeature);
