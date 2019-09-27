import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";

import "bulma/css/bulma.css";
import "./styles.scss";
const rootElement = document.getElementById("root");

// Setting up the store for the application
const store = createStore(reducer);

// Passing in the store to the provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
