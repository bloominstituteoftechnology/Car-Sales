import React from "react";
import Header from "./components/layout/Header";
import AddedFeatures from "./components/addedFeature/AddedFeatures";
import AdditionalFeatures from "./components/additionalFeatures/AdditionalFeatures";
import Total from "./components/price/Total";


const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};



export default App;
