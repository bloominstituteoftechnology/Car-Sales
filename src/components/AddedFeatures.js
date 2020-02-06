import React from 'react';
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from "../actions/index";

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log("Inside AddedFeatures: ",props.car.features, "Length", props.car.features.length);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} handleRemoveItem={props.handleRemoveItem}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyItem, removeItem })(AddedFeatures);
