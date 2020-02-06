import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { createPropertySignature } from 'typescript';
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from "../actions/index";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} handleBuyItem={props.handleBuyItem}/>
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
    features: state.additionalFeatures
  };
};
export default connect(mapStateToProps, {
  buyItem
})(AdditionalFeatures);
