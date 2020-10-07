import React from 'react';
import {connect} from 'react-redux';
import {deleteFeature} from '../actions/addFeatureAction';
const AddedFeature = props => {
  console.log(props)
  return (
    <li style={{color: 'black'}}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.deleteFeature(props.feature[0].id, props.feature[0].price)}}>X</button>
      {props.feature[0] && props.feature[0].name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    carInfo: state
  }
}

export default connect(mapStateToProps, {deleteFeature})(AddedFeature);
