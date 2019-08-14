import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  // console.log('headerprops', props);

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
  // console.log('headerstate', state);
  return {
    carPrice: state.car.price,
    carName: state.car.name,
    carImage: state.car.image,
  };
};

export default connect(mapStateToProps,{})(Header);