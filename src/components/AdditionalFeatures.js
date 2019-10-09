import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  // console.log(props,'inside al-es')
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
