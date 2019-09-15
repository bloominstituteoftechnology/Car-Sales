import React from 'react';

import { useSelector} from 'react-redux';

const Header = () => {

const headerState = useSelector(state => state);

  return (
    <>
      <figure className="image is-128x128">
        <img src={headerState.car.image} alt={headerState.car.name} />
      </figure>
      <h2>{headerState.car.name}</h2>
      <p>Amount: ${headerState.car.price}</p>
    </>
  );
};

export default Header;
