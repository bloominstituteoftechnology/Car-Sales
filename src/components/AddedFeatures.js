import React from 'react';
import { removeFeature, removeFeaturePrice } from '../actions/actions.js';
import { connect } from 'react-redux';


import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const removeFeatureHandler = feature => {
    props.removeFeature(feature);
    props.removeFeaturePrice(feature.price)
  };


  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeatureHandler={removeFeatureHandler} />
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
    car: state.carReducer
  }
}
export default AddedFeatures;
