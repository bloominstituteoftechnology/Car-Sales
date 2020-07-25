import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addFeatReducer } from './components/reducers/addFeatReducer';
import { headTotalReducer } from './components/reducers/head-totalReducer';
import { combineReducers } from 'redux';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
    addFeatReducer,
    headTotalReducer
})

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
