import React from 'react';
import { connect } from 'react-redux'; 
import { removeFeatures } from '../actions'; 

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> {
        props.dispatch(removeFeatures(props.feature))
      }}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state, props) => {
  return{
    ...state, 
    feature: props.feature
  }
}
// export default AddedFeature;

export default connect(mapStateToProps, {removeFeatures})(AddedFeature)