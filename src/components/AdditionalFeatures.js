// Import Dependencies
import React from "react";
import { connect } from "react-redux";

// Import Components
import AdditionalFeature from "./AdditionalFeature";

// Import Actions
import { addFeature } from "../store/actions";

const AdditionalFeatures = (props) => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type='1'>
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={props.addFeature}
              car={props.car}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// Variable to connect the props into the component
const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.carReducer.additionalFeatures,
    car: state.carReducer.car,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
