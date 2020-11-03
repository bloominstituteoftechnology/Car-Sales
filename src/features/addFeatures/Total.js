import React from 'react';
import { useSelector } from "react-redux";

const Total = props => {
	// const price = useSelector(state => state.features);
	const price = useSelector(state => state.features.price);
	return (
		<div className="content">
			{/* <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4> */}
			<h4>Total Amount: ${price.total}</h4>
		</div>
	);
};

export default Total;
