import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";

const AdditionalFeatures = (props) => {
  const addItem = (item) => {
    props.addFeature(item);
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              addFeature={addItem}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
