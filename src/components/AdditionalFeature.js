import React from 'react';
import {connect} from 'react-redux'
import {addNewFeature} from '../actions/featureListAction'


const AdditionalFeature = props => {

  const {name,id,price,addNewFeature} = props;
  const handleAdd = () => {
    addNewFeature({name,id,price})
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>Add</button>
      {name} (+{price})
    </li>
  );
};


export default connect (null, {addNewFeature}) (AdditionalFeature);
