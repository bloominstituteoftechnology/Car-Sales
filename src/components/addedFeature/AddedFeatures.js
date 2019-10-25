import React from "react";
// hook react up with redux
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

// action creator
import { removeItem } from "../../actions/action";

const AddedFeatures = ({ car ,  removeItem }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    car: store.car
  };
};

const mapDispatchToProps = {
  removeItem
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddedFeatures);
