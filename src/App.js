import React from 'react';
import { connect, Connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// import { addFeature, removeFeature } from './actions/featureActions';
import { initialState } from './reducers/index';

const App = props => {
	//added initial state to reducers/index.js

	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures car={props.car} />
			</div>
			<div className="box">
				<AdditionalFeatures additionalFeatures={props.additionalFeatures} />
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	);
};

//this we read state values from store
const mapStateToProps = state => {
	return {
		car: state.car,
		additionalFeatures: state.additionalFeatures
	};
};

//this is how we update state in the store (reducer actionss)
const mapDispatchToProps = () => {
	return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
