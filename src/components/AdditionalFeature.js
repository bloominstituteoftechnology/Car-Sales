import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions';

const AdditionalFeature = props => {

  const handleAdd = () => {
    props.addFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick= {handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, {addFeature})(AdditionalFeature);
