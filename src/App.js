import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {types} from './reducers/carReducer'

const App = () => {

  const { car, additionalFeatures, additionalPrice } = useSelector(state => state)
  const dispatch = useDispatch()

  const removeFeature = feature  => { 
    return dispatch({type: types.REMOVE_FEATURE, payload: feature });
  };
  
  const addFeature = feature => { 
    return dispatch({type: types.ADD_FEATURE, payload: feature });
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addFeature}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default (App);
