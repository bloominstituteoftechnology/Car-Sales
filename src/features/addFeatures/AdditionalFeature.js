import React from 'react';
import { useDispatch } from "react-redux";
import { featureAdded } from "./featuresSlice";
const AdditionalFeature = props => {
	const dispatch = useDispatch();
	const handleFeatureAdded = (evt) => {
		evt.preventDefault();
		dispatch(featureAdded(props.feature));
	}
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="button" onClick={handleFeatureAdded}>Add</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
