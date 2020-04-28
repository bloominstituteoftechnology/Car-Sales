import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  console.log(props.additionalFeatures);
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} handleClick={props.handleClick}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;