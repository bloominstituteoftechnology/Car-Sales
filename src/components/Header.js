import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-158x158">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Current Price: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  };
};

export default connect (
  mapStateToProps,
  {},
)(Header);
