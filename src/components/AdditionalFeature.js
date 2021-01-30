import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    props.additionalFeatures.map(item => {
      return (<li>
      {/* Add an onClick that will let you add a feature to your car */}
      {<button className="button">Add</button>}
      {item.name} (+{item.price})
    </li>)
    })
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);
