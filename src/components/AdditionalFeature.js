import React from 'react';
import {addFeature} from '../actions/featureActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const onClick = () => {
    // dispatch(addFeature(props.feature.id))
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={onClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);
