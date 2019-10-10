import React from 'react';

import { connect } from 'react-redux'; //access to redux store
import { REMOVE } from '../components/actions/index';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.REMOVE(props.id)}>X</button>
      {props.name}
    </li>
  );
};

const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    name: state.car.name,
    price: state.car.price,
    id: state.car.id
  }
}

export default connect(
  mapStateToProps,
  { REMOVE }
)(AddedFeature);;