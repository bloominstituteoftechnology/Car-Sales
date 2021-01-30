import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../Actions';

const AddedFeature = props => {
  return (
    props.car.features.map(item => {
      return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button className="button"
        onClick={() => {props.removeFeature(item)}}>X</button>
        {item.name}
      </li>)
    })
    
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
