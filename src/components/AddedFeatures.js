import React from 'react';

import { connect } from 'react-redux'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.feature.length ? (
        <ol type="1">
          {props.car.features.map(feature => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {
    additionalFeatures: state.feature.id
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
