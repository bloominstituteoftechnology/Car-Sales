import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  console.log("%%%%", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length > 0 ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature id={item.id} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
