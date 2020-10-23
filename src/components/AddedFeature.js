import React from 'react';
import {removeFeature} from './actions/featureAction';
import {connect} from 'react-redux'

const AddedFeature = props => {
  console.log('props in addedfeature',props)
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
    
    name : state.name
  }
}
export default connect(mapStateToProps,{removeFeature})(AddedFeature);

