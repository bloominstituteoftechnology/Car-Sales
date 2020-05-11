import React from "react";
import { connect } from "react-redux";
import { addFeature } from "./actions/feauturesActions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  // const state = {

  // };

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    return { type: "REMOVE_FEATURE", payload: item };
  };

  const buyItem = (item) => {
    // dipsatch an action here to add an item
    return { type: "ADD_FEATURE", payload: item };
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { addFeature })(App);
