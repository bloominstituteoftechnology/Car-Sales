import React from 'react';
import {removeFeature} from '../featureActions'
import {connect} from 'react-redux';

const AddedFeature = props => {

  const removeHandler = e =>{
    e.preventDefault();
    props.removeFeature(props.feature)
   }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {removeHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  return {

  }
}

export default connect(mapStateToProps,{removeFeature})(AddedFeature);


