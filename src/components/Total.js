import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature} from '../actions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('header state',state)
  return {
    carPrice: state.car.price,
    additionalPrice: state.additionalPrice
  }
}
export default connect(
mapStateToProps,
{buyFeature}
)(Total);
