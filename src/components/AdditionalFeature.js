import React from 'react';
import {addFeature} from '../actions/featuresActions';
import { connect } from "react-redux";

const AdditionalFeature = props => {

  const handleClick = e => {
    e.preventDefault();
    if (!props.car.features.includes(props.feature)) {
      props.addFeature({
        price: props.feature.price,
        id: props.feature.id,
        name: props.feature.name,
      })
    }
  }

  return (
    <li>
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return { 
    car: state.car,
  };
};

export default connect(mapStateToProps, { addFeature }) (AdditionalFeature);
