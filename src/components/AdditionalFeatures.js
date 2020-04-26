import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type='1'>
          {props.additionalFeatures.map((item, index) => (
            <AdditionalFeature key={item.id} index={index} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { additionalFeatures: state.additionalFeatures };
};

export default connect(mapStateToProps, {})(AdditionalFeatures);