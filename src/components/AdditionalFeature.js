import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";


const AdditionalFeature = props => {
  state = {
    newFeature: ""
  };

handleChanges = (e) => {
  this.setState({ newFeature: e.target.value });
};

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => this.props.addFeature(this.state.newFeature)}>
        Add Feature
        </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = (state) => {
  return {
    features: state.features,
    headerFromRedux: state.header
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
