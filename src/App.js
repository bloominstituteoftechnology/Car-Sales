import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addMovie} from "./actions/index"
const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total />
      </div>
    </div>
  );
};

export default App;
