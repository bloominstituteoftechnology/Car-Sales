import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions/featureActions';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={() => props.removedFeature( props.feature.id )}      
      >X</button>
      { props.feature.name }
    </li>
  );
};
const mapStateToProps = ( state ) => {
  return {
    car: state.featuresReducer.car
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addFeature: ( id ) => dispatch( addFeature( id ) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
