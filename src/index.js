import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// importing the createStore function from redux
import { createStore } from 'redux';
// importing the Provider from react-redux so I can wrapp my <Aoo /> in it. Nice and cozy
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
