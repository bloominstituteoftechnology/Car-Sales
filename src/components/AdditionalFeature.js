import React from 'react';
import {connect} from 'react-redux'; 
import { addFeatures } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> {
        props.dispatch(addFeatures(props.feature))
      }}
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapsStateToProps = (state, props) => {
  return {
    ...state, 
    feature: props.feature
  }
}


export default connect(mapsStateToProps, {addFeatures})(AdditionalFeature)