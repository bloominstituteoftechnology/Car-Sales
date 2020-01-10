import React from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
        <Total />
      </div>
      <div className="box">
        <AdditionalFeatures />
      </div>
    </div>
  );
};

export default App;