import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { featuredListReducer } from "./reducers/featuredListReducers"
import { Provider } from "react-redux"
import { createStore } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featuredListReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
