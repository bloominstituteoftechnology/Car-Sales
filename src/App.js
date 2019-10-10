import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import * as reducers from './state/reducers';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Step 4 - store all our reducer in one big variable thanks to the combineReducers hook from the redux library!
const rootReducer = combineReducers({
  state: reducers.carReducer
});

// Step 5 - nourrish our management state (store) our reducers functions
const store = createStore(rootReducer);

const App = () => {

  return (
    // Step 6 - inject the store into our Provider, and make all our slices available to all components within our app  
    <Provider store={store}>
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
    </div>
    </Provider>
  );
};

export default App;
