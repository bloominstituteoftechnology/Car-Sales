import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  // console.log('additionalfeaturesprops', props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeLength ? (
        <ol type="1">
          {props.store.map(item => (
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
  // console.log('additionalfeaturesstate', state);
  return {
    storeLength: state.store.length,
    store: state.store,
  };
};

export default connect(mapStateToProps,{})(AdditionalFeatures);
