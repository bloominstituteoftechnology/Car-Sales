import React from 'react';
import {connect} from "react-redux"
import {add1500} from "../actions/actions"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
add1500
}

export default connect( state => state, mapDispatchToProps)(AdditionalFeature)
