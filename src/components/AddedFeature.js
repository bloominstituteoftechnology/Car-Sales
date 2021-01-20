import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/featuresActions';

const AddedFeature = props => {

  const handleClick = e => {
    e.preventDefault();
    props.removeFeature({
      price: props.feature.price,
      id: props.feature.id,
      name: props.feature.name,
    })
  }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return { 

  };
};

export default connect(mapStateToProps, { removeFeature }) (AddedFeature);
