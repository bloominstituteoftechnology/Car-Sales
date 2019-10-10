import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ state }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.store.length ? (
        <ol type="1">
          {state.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(state => state)(AdditionalFeatures);

