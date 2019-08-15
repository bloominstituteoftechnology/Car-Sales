import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todoReducer } from './reducers/todoReducer';

import App from './App';
// import './styles.css';
import './styles.scss';
// STEP 1 - Create a store! Pass our store object into the Redux Provider component that is wrapped around <App />
  export const store = createStore(todoReducer);
//   export const store = createStore(titleReducer);

 console.log('index src store',store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);