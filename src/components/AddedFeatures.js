import React from 'react';

import { connect } from 'react-redux'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map(feature => (
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
   state: state
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
