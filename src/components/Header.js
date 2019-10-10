import React from 'react';
import { connect } from 'react-redux';

export const Header = ({ state }) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

export default connect(state => state)(Header);
