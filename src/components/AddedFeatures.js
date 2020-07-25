import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/featureActions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('from AddedFeatures', props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={props.item.id} feature={props.addFeature()} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
};

export default connect(
  mapStateToProps,
  {
    addFeature,
    removeFeature
  }
)(AddedFeatures);
