import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { removeFeature, buyItem } from './actions/carActions'

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={props.buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  removeFeature,
  buyItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
