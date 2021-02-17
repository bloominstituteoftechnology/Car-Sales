import React from 'react';
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/index'

const AddedFeature = props => {

  const handelClick = () => {
    props.deleteFeature(props.features)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handelClick}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return ({
    features: state.car.features
  })
}

export default connect(mapStateToProps, {deleteFeature})(AddedFeature);
