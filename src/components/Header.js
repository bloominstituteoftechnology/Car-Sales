import React from 'react';

import { connect } from 'react-redux'; 
import * as actionCreators from '../state/actionCreators'; 

export const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default connect(state => state, actionCreators)(Header);
