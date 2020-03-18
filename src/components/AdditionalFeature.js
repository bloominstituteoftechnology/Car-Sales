import React from 'react';

const AdditionalFeature = props => {
	// Props contain individual feature to be used with addFeature action
	//console.log("AdditionalFeature ~ ", props);

	return (
		<li>
			<button className="button" onClick={() => {props.addFeature(props.feature)}}>Add</button>

			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
