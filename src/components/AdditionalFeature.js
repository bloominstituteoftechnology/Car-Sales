import React from 'react';
import { addFeat } from '../actions/actions';
import { connect } from 'react-redux'; // HOC

const AdditionalFeature = props => {
	return (
		<li id={props.key}>
			{console.log('this is key', props.key)}
			{/* Add an onClick that will let you add a feature to your car */}
			<button className='button' onClick={() => props.addFeat(props.feature)}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price}€)
		</li>
	);
};

const mapStateToProps = state => {
	return {
		additionalFeatures: state.additionalFeatures
	};
};
export default connect(mapStateToProps, { addFeat })(AdditionalFeature); // function currying
