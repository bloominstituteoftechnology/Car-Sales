import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');

const AppWithProvider = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(AppWithProvider, rootElement);
