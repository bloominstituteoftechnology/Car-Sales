import React from 'react';
import { buyItem } from '../actions/addAction';
import { connect } from "react-redux";

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.features)} >Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.additionalFeatures.name,
    price: state.additionalFeatures.price
  };
};

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeature);

// export default AdditionalFeature;
