import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = ({features}) => {
  //console.log(`additional features`, props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    features: state.store
  }
}


export default connect(
  mapStateToProps,
)(AdditionalFeatures);