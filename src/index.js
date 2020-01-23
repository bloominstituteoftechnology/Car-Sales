import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/reducer';
import 'bulma/css/bulma.css';
import './styles.scss';

// Step 1 - create a store and connect it to our app
// use createStore function
const store = createStore(reducer);

// STEP Ia - Provide the store to your app
// use the <Provider /> component and pass in your store as a prop
const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
