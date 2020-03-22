import React from 'react';
import { connect } from 'react-redux';
import { removeFeature, updateTotal } from '../actions/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        props.removeFeature(props.feature.id);
        props.updateTotal(-props.feature.price);
      }
      } className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature, updateTotal})(AddedFeature)
