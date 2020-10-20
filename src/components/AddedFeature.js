import React from 'react';
import {addFeature} from './actions/featureAction';
import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state=>{
  console.log('state in propsState in AddedFeature',state);
  return {
    
    feature : state.feature.name
  }
}
export default connect(mapStateToProps,{addFeature})(AddedFeature);

