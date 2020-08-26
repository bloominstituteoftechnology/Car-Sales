import React from "react";
import { removeFeature } from "../actions/index";
import { connect } from "react-redux";
const AddedFeature = (props) => {
  //console.log();

  const handler = (event) => {
    event.preventDefault();

    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handler}>
        X
      </button>

      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
