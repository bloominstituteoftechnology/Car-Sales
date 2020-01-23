import React from 'react';
import { connect } from 'react-redux'; // HOC
import { removeFeat } from '../actions/actions';

const AddedFeature = props => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button
				className='button'
				onClick={() => props.removeFeat(props.feature)}
			>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

const mapStateToProps = state => {
	return {
		additionalFeatures: state.additionalFeatures
	};
};
export default connect(mapStateToProps, { removeFeat })(AddedFeature); // function currying
