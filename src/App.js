import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { useSelector, useDispatch } from 'react-redux'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE = 'REMOVE_FEATURE'

const App = () => {
  const dispatch = useDispatch()
  //selectors from State
  const additionalPrice = useSelector(state => state.additionalPrice)
  const car = useSelector(state => state.car)
  const store = useSelector(state => state.store)  

  const removeFeature = feature => {

    console.log(feature)
    dispatch({ type: REMOVE, payload: feature })

  };

  const buyItem = item => {

    let index = car.features.findIndex(element => element.name === item.name)
    index === -1 && dispatch({ type: ADD_ITEM, payload: item })

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

export default App
