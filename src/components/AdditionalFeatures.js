import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { mainReducer } from '../reducers/reducers'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeOnProps.length ? (
        <ol type="1">
          {props.storeOnProps.map(item => (
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
  console.log('state from mapState in additionalfeatures', state);
  return {
    storeOnProps: state.store
  };
};

export default connect(
  mapStateToProps,
  { mainReducer }
)(AdditionalFeatures);
