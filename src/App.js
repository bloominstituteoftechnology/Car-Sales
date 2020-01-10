import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/buttonActions';

const App = () => {

  return (
    <div className='boxes'>
      <div className='box'>
        <Header />
        <AddedFeatures />
      </div>
      <div className='box'>
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
