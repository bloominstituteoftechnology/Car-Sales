import React from 'react';
import { useSelector } from "react-redux";

const Header = props => {
	const carImage = useSelector(state => state.car.image);
	const carName = useSelector(state => state.car.name);
	const price = useSelector(state => state.features.price);
	return (
		<>
			<figure className="image is-128x128">
				<img src={carImage} alt={carName} />
			</figure>
			<h2>{carName}</h2>
			<p>Base Amount: ${price.base}</p>
			<p>Add-ons: ${price.addons}</p>
		</>
	);
};

export default Header;
