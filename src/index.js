import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//1. install redux and react-redux
//2. import wrapper and store
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import "bulma/css/bulma.css";
import "./styles.scss";

//3. create store passing in rootReducer
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  //4. Wrap App in Provider passing store as props
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
