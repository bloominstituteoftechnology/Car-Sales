import React from 'react';

import { connect } from 'react-redux';
import { removeFeature, removePrice } from './actions/featureActions';

const AddedFeature = props => {
  console.log('from AddedFeature', props);

  const handleChanges = (e => {
    e.preventDefault();
    removeFeature();
    removePrice();
  })

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick={(e) => handleChanges(e)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    AdditionalFeatures: state.AdditionalFeatures
  }
};

export default connect(mapStateToProps,
  {
    removeFeature,
    removePrice
  })(AddedFeature);
