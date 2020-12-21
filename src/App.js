import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  const state = {
    additionalPrice: 500,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
  };

  // const addPrice = state.additionalFeatures.filter((n) => n.id === 2);
  // const test = parseInt(addPrice.map((item) => {return item.price}), 10)
  // console.log(typeof(test));

  // const getName = addPrice.map((item) => {return item.name}).toString();
  // console.log(getName)

  // const newState = { ...state, additionalPrice: state.additionalPrice + test, car: {...state.car, features: [...state.car.features, getName]} };

  // console.log(newState);

  // const removeItems = {...newState, additionalPrice: newState.additionalPrice - test, car: {...newState.car, features: [ newState.car.features.filter(feature => feature !== "Racing detail package")]}}

  // console.log(removeItems)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
