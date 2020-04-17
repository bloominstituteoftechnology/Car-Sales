import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} onClick={() => props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
export default connect(null, { removeFeature })(AdditionalFeatures);
