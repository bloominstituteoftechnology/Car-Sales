import React from 'react';
//import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {removeFeature} from '../actions/carActions';

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleRemoveFeature = () => {
    // props.removeFeature(props.feature);
    dispatch(removeFeature(props.feature));
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

//export default connect(null, {removeFeature})(AddedFeature);
export default AddedFeature;
