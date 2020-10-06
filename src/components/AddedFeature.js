import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/featureActions'

const AddedFeature = props => {
  state = {
    oldFeature: ""
  };

handleChanges = (e) => {
  this.setState({ oldFeature: e.target.value });
};

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => this.props.removeFeature(this.state.oldFeature)}>Remove Feature</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.features,
    headerFromRedux: state.header
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
