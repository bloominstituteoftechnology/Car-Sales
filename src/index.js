import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { featuresReducer as reducer } from './reducers';

export const store = createStore(reducer); 

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
rootElement);
