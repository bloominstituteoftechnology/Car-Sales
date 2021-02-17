import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/featReducers'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
return (
  <div className="boxes">
    <div className="box">
      <Header car={state.car} />
      <AddedFeatures car={state.car} reducer={dispatch}/>
    </div>
    <div className="box">
      <AdditionalFeatures additionalFeatures={state.additionalFeatures} reducer={dispatch} />
      <Total car={state.car} additionalPrice={state.additionalPrice} />
    </div>
  </div>
);
};

export default App;