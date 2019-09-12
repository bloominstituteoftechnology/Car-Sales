import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions';

const App = props => {
  console.log('props in app: ', props)

  const removeItem = (feature, car) => {
    props.removeFeature(feature, car)
  };

    const buyItem = (feature, car) => {
      props.addFeature(feature, car);
    };
    
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} store={props.store} removeItem={removeItem} />
      </div>
      <div className="box">
      <AdditionalFeatures store={props.store} buyItem={buyItem} car={props.car} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
