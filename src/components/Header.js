import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-256x256">
        <img className= "is-rounded"  src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>From: ${props.car.price} +</p>
    </>
  );
};

export default Header;
