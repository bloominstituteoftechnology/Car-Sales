import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles.scss";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
