import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import carReducer, { ADD_FEATURE, REMOVE_FEATURE, initialState } from './reducers/carReducer'

const App = () => {
  const [state, dispatch] = useReducer(carReducer, initialState)

  const removeFeature = feature => {
    // dispatch an action here to remove an item
    dispatch({ type: REMOVE_FEATURE, payload: feature })
  }

  const buyItem = feature => {
    // dispatch an action here to add an item
    dispatch({ type: ADD_FEATURE, payload: feature})
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
