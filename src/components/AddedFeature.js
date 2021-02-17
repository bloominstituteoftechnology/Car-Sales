import React from 'react';
import {removeFeature} from "./actions";
import {connect} from "react-redux";

const AddedFeature = props => {
  const {feature, removeFeature} = props;
  const handleClick = () => {
    removeFeature(feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature)
