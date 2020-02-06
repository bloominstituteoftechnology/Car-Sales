import React from 'react';
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from "../actions/index";

const AddedFeature = ({feature, handleRemoveItem}) => {
  console.log("Inside AddedFeature: ",feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> handleRemoveItem(feature)}>X</button>
      {feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyItem, removeItem })(AddedFeature);
