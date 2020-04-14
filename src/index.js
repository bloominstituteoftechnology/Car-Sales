import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { mainReducer } from './reducers/mainReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(mainReducer)
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, rootElement);
