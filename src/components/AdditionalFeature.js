import React from "react";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeature = (props) => {
  //Added useDispatch hook from react-redux
  const dispatch = useDispatch();


  const handleChanges = (e) => {
    e.preventDefault();
    // props.addItem(props.feature)
    dispatch(addItem(props.feature));
  };

  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
// export default connect(null, { addItem })(AdditionalFeature);