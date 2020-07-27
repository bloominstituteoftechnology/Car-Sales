import React from 'react';

import { connect } from 'react-redux';
import { removeFeature } from './actions/featureActions';

const AddedFeature = props => {
  console.log('from AddedFeature', props);

  const handleChanges = (e => {
    e.preventDefault();
    props.removeFeature(props.feature);
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

export default connect(
  null,
  { removeFeature }
)(AddedFeature);
