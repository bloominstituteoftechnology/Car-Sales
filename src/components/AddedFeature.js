import React from 'react';
import {connect} from 'react-redux'
import {removeNewFeature} from '../actions/featureListAction'


const AddedFeature = props => {

const handleRemove= () => {
  props.removeNewFeature(props.feature)
}

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove} >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeNewFeature}) (AddedFeature);
