import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {createStore} from 'redux'
import {additionalFeaturesReducer} from "./Reducers/additionalFeaturesReducer"

import 'bulma/css/bulma.css';
import './styles.scss';

import {Provider} from 'react-redux'


const store = createStore(additionalFeaturesReducer)
console.log(store.getstore)
  console.log(additionalFeaturesReducer)




const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>, rootElement);
