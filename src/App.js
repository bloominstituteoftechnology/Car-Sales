import React from "react";

import { connect } from "react-redux";

import { removeItem, addItem } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    //   // dispatch an action here to remove an item

    props.removeItem(item);
  };

  const buyItem = item => {
    //   // dispatch an action here to add an item
    props.addItem(item);
  };

  // const { state, removeFeature, buyItem } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("maps props", state);
  return {
    features: state.car.features,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeItem, addItem })(App);