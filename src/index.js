import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import{ reducer } from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
