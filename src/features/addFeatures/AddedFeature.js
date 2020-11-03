import React from 'react';
import { useDispatch } from "react-redux";
import { featureRemoved } from "./featuresSlice";
const AddedFeature = props => {
	const dispatch = useDispatch();
	const handleFeatureRemoved = (evt) => {
		evt.preventDefault();
		dispatch(featureRemoved(props.feature));
	}
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button className="button" onClick={handleFeatureRemoved}>X</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
