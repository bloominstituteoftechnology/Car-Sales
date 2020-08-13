import React from 'react';
import AdditionalFeature from './AdditionalFeature'
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.map(item => ( 
        <AdditionalFeature key={item.id} feature= {item} />
        ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {}) (AdditionalFeatures);
