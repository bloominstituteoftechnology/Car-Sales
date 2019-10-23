import React from 'react';
import { connect } from 'react-redux'
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state =>{
  return{
    car: state.name
  }
}

export default connect(mapStateToProps,{})(AddedFeature);
