import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature
              id={item.id}
              key={Math.floor(Math.random() * 1000)}
              feature={item}
            />
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
    features: state.car.features
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
