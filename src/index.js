// Import Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

// Import Components
import App from "./App";

// Import Assets
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
