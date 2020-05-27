import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { carReducer } from './Reducer/reducer';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const store = createStore(carReducer)

const App = () => {

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header  />
          <AddedFeatures  />
        </div>
        <div className="box">
          <AdditionalFeatures  />
          <Total  />
        </div>
      </div>
    </Provider>
  );
};

export default App;