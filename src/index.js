import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theReducer } from "./reducers/theReducer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(theReducer, applyMiddleware(logger));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
