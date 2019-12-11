import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions';

const AdditionalFeature = props => {
  // console.log(props.feature);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

const mapStateToProps = state => {
  return null
}

export default connect(mapStateToProps, { buyItem }) (AdditionalFeature);