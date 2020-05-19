import React, { useState } from "react";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const [disabled, setDisabled] = useState(false);

  const addNewFeature = () => {
    let exist = props.car.features.find((f) => {
      return f.id === props.feature.id;
    });

    if (exist !== undefined) {
      return;
    } else {
      let feature = {
        id: props.feature.id,
        name: props.feature.name,
        price: props.feature.price,
      };
      props.addFeature(feature);
      props.updatePrice("add", props.feature.price);
    }
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addNewFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, {})(AdditionalFeature);
