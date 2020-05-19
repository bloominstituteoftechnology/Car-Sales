import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addFeature, removeFeature, updatePrice } from "./actions/actions";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          car={props.car}
          removeFeature={props.removeFeature}
          updatePrice={props.updatePrice}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={props.addFeature}
          updatePrice={props.updatePrice}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  updatePrice,
})(App);
