import React from 'react';
import { connect } from 'react-redux'; // HOC

const Total = props => {
	return (
		<div className='content'>
			<h4>Total Amount: ${props.price + props.additionalPrice}</h4>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		additionalPrice: state.additionalPrice,
		price: state.car.price,
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, {})(Total); // function currying
