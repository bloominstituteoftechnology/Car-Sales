import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//Import connect to connect our store(redux) with react
//Also Import our action Creators
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";

const App = (props) => {
  const removeFeature = (item) => {
    props.removeFeature(item);
  };
  const addFeature = (item) => {
    props.addFeature(item);
  };
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",
  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: [],
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: "V-6 engine", price: 1500 },
  //     { id: 2, name: "Racing detail package", price: 1500 },
  //     { id: 3, name: "Premium sound system", price: 500 },
  //     { id: 4, name: "Rear spoiler", price: 250 },
  //   ],
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        {/* <AddedFeatures car={props.car} /> */}
        <AddedFeatures removeItem={removeFeature} />
      </div>
      <div className="box">
        {/* <AdditionalFeatures additionalFeatures={props.additionalFeatures} /> */}
        <AdditionalFeatures addItem={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(
  /* 1st arg fn,2nd arg fn||obj||null||undefined */ mapStateToProps,
  { addFeature, removeFeature }
)(App);
