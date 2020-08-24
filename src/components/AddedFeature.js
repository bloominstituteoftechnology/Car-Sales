import React from 'react';
import { removeFeature } from '../actions/actions';
import { connect } from 'react-redux';

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  removeFeature,
}

export default connect(null, mapDispatchToProps)(AddedFeature);
