import React from 'react';
import { connect } from 'react-redux'; // HOC

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
	const removeFeature = item => {
		// dispatch an action here to remove an item
	};

	const buyItem = item => {
		// dipsatch an action here to add an item
	};

	return (
		<div className='boxes'>
			<div className='box'>
				<Header />
				<AddedFeatures />
			</div>
			<div className='box'>
				<AdditionalFeatures />
				<Total />
			</div>
		</div>
	);
};

// STEP IIa - wrap the component in the second connect function call
// STEP IIb - first function call takes in a function and an object
// STEP IIbi - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
	return {
		additionalPrice: state.additionalPrice,
		car: state.car,
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, {})(App); // function currying
