import React from 'react';
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from "../actions/index";


const AdditionalFeature = ({feature, handleBuyItem}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> handleBuyItem(feature)}>Add</button>
      {feature.name} (+{feature.price})
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

export default connect(mapStateToProps, { buyItem, removeItem })(AdditionalFeature);
