import React from 'react';
import { connect } from 'react-redux';

const Header = state => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.checkoutReducer.car.image} alt={state.checkoutReducer.car.name} />
      </figure>
      <h2>{state.checkoutReducer.car.name}</h2>
      <p>Amount: ${state.checkoutReducer.car.price}</p>
    </>
  );
};

export default connect(state => {
  return state
}, {})(Header);
