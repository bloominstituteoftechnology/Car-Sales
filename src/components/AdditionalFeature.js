import React from 'react';
import {connect} from 'react-redux'


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{
        props.feature(state.addedFeatures)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToStateProps = (state) => {
  return{
    Add:state.name
  }
}

export default connect(mapStateToStateProps, {}) (AdditionalFeature);
