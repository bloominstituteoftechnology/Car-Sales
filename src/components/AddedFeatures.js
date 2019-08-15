import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature} from '../actions'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFeatures.length ? (
        <ol type="1">
          {props.carFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  console.log('header state',state)
  return {
    carFeatures: state.car.features,
  }
}
export default connect(
mapStateToProps,
{buyFeature}
)(AddedFeatures);
