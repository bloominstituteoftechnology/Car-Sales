import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import App from "./App";
import reducer from "./Redux/reducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);
// console.log(store.getState())

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
