import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../Actions';

const AdditionalFeature = props => {
  return (
    props.additionalFeatures.map(item => {
      return (
      <li key={item.id}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={() => {props.addFeature(item);
      }}>Add</button>
      {item.name} (+{item.price})
      {console.log(item)}
    </li>)
    })
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
