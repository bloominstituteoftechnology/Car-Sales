
 import React from 'react';
 import {useSelector} from 'react-redux';

const Header = () => {
const {image, price, name} = useSelector(state => state.car);

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

export default Header;
