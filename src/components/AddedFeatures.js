import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions/carActions'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature removeFeature={props.removeFeature} key={item.id} feature={item} />
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
    features: state.car.features
  }
}

const mapDispatchToProps = {
  removeFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
