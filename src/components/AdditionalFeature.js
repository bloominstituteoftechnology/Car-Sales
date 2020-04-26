
import React from 'react';

import { connect } from 'react-redux';

import { buyItem } from '../actions/action';

const AdditionalFeature = props => {
  const addItem = e => {
    e.preventDefault();
    props.buyItem(props.features[props.index]);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addItem} className='button'>
        Add
      </button>
      {props.features[props.index].name} (+{props.features[props.index].price})
    </li>
  );
};

const mapStateToProps = state => {
  return { features: state.additionalFeatures };
};
export default connect(mapStateToProps, { buyItem })(AdditionalFeature);