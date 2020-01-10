import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature, addFeaturePrice } from '../actions/buttonActions';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item} 
              addFeature={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.storeReducer
  }
}

export default connect(mapStateToProps, { addFeature, addFeaturePrice })(AdditionalFeatures);
