import React from "react";
import { connect } from "react-redux";
import {remove} from '../actions/actions'
import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {

  const removeItem = item => {
    props.remove(item)
  };



  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature delete={removeItem} key={item.id} feature={item} />
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
    car: state.car
  };
};

export default connect(mapStateToProps, {remove})(AddedFeatures);
