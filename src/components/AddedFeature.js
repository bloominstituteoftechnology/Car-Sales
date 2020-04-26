import React from 'react';

import { connect } from 'react-redux';
import { removeFeature } from '../actions/action';

const AddedFeature = (props) => {
  const removeItem = (e) => {
    e.preventDefault();
    props.removeFeature(props.features[props.index]);
  };

  return (
    <li>
      <button onClick={removeItem} className="button">
        Remove Feature
      </button>
      {props.toppings[props.index].name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.pizza.toppings
  };
};
export default connect(mapStateToProps, { removeTopping })(AddedFeature);