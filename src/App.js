import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { toggleFeature } from "./actions/index";

const App = (props) => {
	const handleClick = (e) => {
		props.toggleFeature(e.target.id);
	};

	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures car={props.car} />
			</div>
			<div className="box">
				<AdditionalFeatures
					additionalFeatures={props.additionalFeatures}
					handleClick={handleClick}
				/>
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.car,
		additionalFeatures: state.additionalFeatures,
		additionalPrice: state.additionalPrice,
	};
};

export default connect(mapStateToProps, { toggleFeature })(App);
