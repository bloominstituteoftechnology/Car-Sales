import React from 'react';
import { connect } from 'react-redux'; 
import { subtractFeature  } from '../actions/rootActions';

 
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {props.subtractFeature({id: props.feature.id, price: props.feature.price, name: props.feature.name})}} 
      className="button">X</button>
    </li>
  );
};
function mapStateToProps(state){
  return {
    id: state.feature.id,
    price: state.feature.price,
    name: state.feature.name
  }
}

export default connect(null, { subtractFeature } )(AddedFeature);
