import React from "react";

const AdditionalFeature = (props) => {
	console.log("NW: AdditionalFeature props =====> ", props);
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button
				onClick={() => this.addFeature(this.feature)}
				className="button"
			>
				Add
			</button>
			{this.props.feature.name} (+{this.feature.price})
		</li>
	);
};

export default AdditionalFeature;
