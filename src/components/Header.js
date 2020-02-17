import React, { useState } from 'react';
import { connect } from 'react-redux';

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

// export default Header;
const mapStateToProps = state => {
  return {
    carImage: state.car.image,
    carName: state.car.name,
    carPrice: state.car.price
  }
}

export default connect(
  mapStateToProps,
  { }
)(Header);