import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './reducers/index'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
