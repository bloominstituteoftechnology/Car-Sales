import React from 'react';

import { connect } from 'react-redux';
import { removeFeature } from './actions/featureActions';

const AddedFeature = props => {
  console.log('from AddedFeature', props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick={props.removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    AdditionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, removed: false },
      { id: 2, name: 'Racing detail package', price: 1500, removed: false },
      { id: 3, name: 'Premium sound system', price: 500, removed: false },
      { id: 4, name: 'Rear spoiler', price: 250, removed: false }
    ]
  }
};

export default connect(mapStateToProps,
  { removeFeature })(AddedFeature);
