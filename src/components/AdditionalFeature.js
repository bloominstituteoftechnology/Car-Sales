import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/index';

const AdditionalFeature = props => {
  console.log('Props from AdditionalFeature', props)

  const clickHandler = () => {
    props.addFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={clickHandler} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null, // Props based syntax, no need to map the state
  {addFeature}
)(AdditionalFeature);