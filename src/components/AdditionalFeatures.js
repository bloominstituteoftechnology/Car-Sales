import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  console.log('additionalfeaturesprops', props);
  return (
    <div className="content">
      {/* <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )} */}
    </div>
  );
};

export default AdditionalFeatures;
