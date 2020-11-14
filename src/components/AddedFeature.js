import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  const clicky = (e) =>{
    e.preventDefault();
    props.removeFeature(props.feature);
  }
  console.log('AddedFeature', (props))

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
       <button className="button" onClick= {clicky}>X</button> 
      {props.feature ? props.feature.name : null}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature)
