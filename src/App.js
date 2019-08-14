import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { buyItem, removeFeature } from "./actions";

const App = ({ removeFeature, buyItem, car, store, additionalPrice }) => {
  const deleteFeature = item => {
    removeFeature(item);
  };

  const purchaseItem = (e, item) => {
    e.preventDefault();
    buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} remove={deleteFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} add={purchaseItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { buyItem, removeFeature }
)(App);