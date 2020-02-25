import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';    //import createStore to create our store that gets provided to <App />
import { Provider } from 'react-redux'; //import provider to provide our store to <App />

import 'bulma/css/bulma.css';
import './styles.scss';

import { reducer } from './reducers/index' //import our created reducer to pass into createStore

const store = createStore(reducer) //create our store

const rootElement = document.getElementById('root');
ReactDOM.render(                   //provide our store to App
  <Provider store={store}> 
    <App />
  </Provider>,
  rootElement
);
