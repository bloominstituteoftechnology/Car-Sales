import React from "react";
import { connect } from "react-redux";
import {addFeature, removeFeature, updateTotal} from './actions/index';

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log('item: ', item)
    props.removeFeature(item);
    props.updateTotal(-item.price);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.updateTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures removeFeature={removeFeature} additionalFeatures={props.AdditionalFeatures} car={props.car}  />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(mapStateToProps, {addFeature, removeFeature, updateTotal})(App);
