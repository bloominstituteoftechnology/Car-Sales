import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './reducers/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(Reducers);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
