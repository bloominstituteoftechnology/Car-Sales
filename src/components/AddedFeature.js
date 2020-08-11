import React from "react";
import { connect, useDispatch } from "react-redux";
import { removeItem } from "../actions";

const AddedFeature = (props) => {
  const dispatch = useDispatch();


  const handleChanges = (e) => {
    e.preventDefault();
    // props.removeItem(props.feature)
    dispatch(removeItem(props.feature));
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleChanges} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// export default connect(null, { removeItem })(AddedFeature);
export default AddedFeature;