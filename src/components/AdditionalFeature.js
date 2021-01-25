import React from 'react';
import { addFeature } from '../actions/featuresActions'
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const handleAddFeature = (evt) => {
    evt.preventDefault();
    props.addFeature(props.feature)
    //console.log("did features update?",props)
   //props.updateAdditional()
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => {}, { addFeature })(AdditionalFeature);