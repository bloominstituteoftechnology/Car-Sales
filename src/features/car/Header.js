import React from 'react';
import { useSelector } from "react-redux";

const Header = props => {
	// const state = useSelector(state => state);
	const carImage = useSelector(state => state.car.image);
	const carName = useSelector(state => state.car.name);
	const price = useSelector(state => state.features.price);
	const basePrice = useSelector(state => state.features.price.base)
	return (
		<>
			<figure className="image is-128x128">
				{/* <img src={state.car.image} alt={state.car.name} /> */}
				<img src={carImage} alt={carName} />
			</figure>
			{/* <h2>{state.car.name}</h2> */}
			<h2>{carName}</h2>
			{/* <p>Amount: ${state.features.basePrice}</p> */}
			<p>Base Amount: ${price.base}</p>
			<p>Add-ons: ${price.addons}</p>
		</>
	);
};

export default Header;
