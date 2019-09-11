import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  console.log('coming form app.js', props);
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures store={props.store} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </div>
      </div>
  );
};

export default App;
