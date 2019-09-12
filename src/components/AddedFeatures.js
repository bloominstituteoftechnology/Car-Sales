import React from 'react';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyNewItem } from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props)
  // Will need to be props.car.features
  const [featureState, setFeatureState] = useState([])

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapPropsToState = state => {
  return {
    features: featureState
  }
}

export default connect(mapPropsToState, { buyNewItem })(AddedFeatures);
