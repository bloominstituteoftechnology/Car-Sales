import React from 'react';
import { addFeature } from '../actions/carSalesActions'
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// no need for mapStateToProps because of this component receives props from prop drilling
// including addFeature here will add addFeature to props
// connect will dispatch addFeature after clicking
export default connect(null, { addFeature })(AdditionalFeature);
