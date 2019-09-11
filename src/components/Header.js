import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import { mainReducer } from '../reducers/reducers'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imgOnProps} alt={props.nameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('state from mapState in header', state);
  return {
    nameOnProps: state.car.name,
    priceOnProps: state.car.price,
    imgOnProps: state.car.image
  };
};

export default connect(
  mapStateToProps,
  { mainReducer }
)(Header);


// export default Header;
