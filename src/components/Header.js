import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature} from '../actions'
const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carImage} alt={props.carName} />
      </figure>
      <h2>{props.carName}</h2>
      <p>Amount: ${props.carPrice}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('header state',state)
  return {
    carImage: state.car.image,
    carName: state.car.name,
    carPrice: state.car.price
  }
}
export default connect(
mapStateToProps,
{}
)(Header);
