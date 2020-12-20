import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/featureActions';

const AddedFeature = props => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button onClick={() => props.removeFeature(props.feature)} className="button">
				X
			</button>
			{props.feature.name}
		</li>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		removeFeature: feature => dispatch(removeFeature(feature))
	};
};

export default connect(null, mapDispatchToProps)(AddedFeature);
