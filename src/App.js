import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './components/actions/featureActions';
// import { addFeatReducer } from './components/reducers/addFeatReducer';
// import { headTotalReducer } from './components/reducers/head-totalReducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {
  console.log('from App', props)
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

const mapStateToProps = state => {
  return {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, removed: false },
      { id: 2, name: 'Racing detail package', price: 1500, removed: false },
      { id: 3, name: 'Premium sound system', price: 500, removed: false },
      { id: 4, name: 'Rear spoiler', price: 250, removed: false }
    ]
  }
};

export default connect(
  mapStateToProps,
  {
    addFeature,
    removeFeature
  }
)(App);
