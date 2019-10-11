import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import ReactDOM from 'react-dom';
// import {createStore} from 'redux'
// import{Provider} from 'react-redux'

//import reducers
//import {rootReducer} from './components/reducers/index'
//import {autoReducer} from './components/reducers/autoReducer'

// function reducer(){
//   return{
//       title: 'Hello'
//   }
// }


const App = () => {


  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div> 
    </div>
  );
};

export default App;

