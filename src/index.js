import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import rootReducer from "./reducers";
import { Provider } from "react-redux"
import { createStore } from "redux";

const store=createStore(rootReducer)
const rootElement = document.getElementById('root');

	// const test = { id: 1, name: 'V-8engine', price: 1500 }
	// const unsubscribe = store.subscribe(() => console.log("test", store.getState()))
	// store.dispatch(addItem(test))
	// // store.dispatch(removeItem(test))
	// console.log('testy', store)
	// unsubscribe()


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	 rootElement);
