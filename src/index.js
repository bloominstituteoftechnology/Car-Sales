import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer/index";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
