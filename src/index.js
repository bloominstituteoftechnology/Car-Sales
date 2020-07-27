import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import { addFeatReducer } from './components/reducers/addFeatReducer';


import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(addFeatReducer, applyMiddleware(logger));
// console.log('from Index', store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
