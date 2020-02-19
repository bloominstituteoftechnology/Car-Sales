import React from "react";
import { addFeature, removeFeature } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";

import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = props => {
  const { state, addFeature} = props;
  console.log("App", state);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.carReducer.car} />
        <AddedFeatures
          car={state.carReducer.car}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={state.carReducer.additionalFeatures}
          addFeature={addFeature}
        />

        <Total
          car={state.carReducer.car}
          additionalPrice={state.carReducer.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);

