import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
import { addCar, remove} from './store/actions'

const App = ({ additionalPrice, car, store, addCar, remove}) => {
  // console.log(store)

  const removeFeature = feature => {
    console.log(feature)
    remove(feature)    
  };

  const buyItem = item => {
    // console.log(item)
    addCar(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ additionalPrice, car, store}) => {
  console.log(additionalPrice)

  return {
    additionalPrice: additionalPrice,
    car: car,
    store: store
  }
}

export default connect(mapStateToProps, { addCar, remove })(App)
