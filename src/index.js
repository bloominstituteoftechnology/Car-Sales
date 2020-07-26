import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addFeatReducer } from './components/reducers/addFeatReducer';
import { combineReducers } from 'redux';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { addFeature } from './components/actions/featureActions';


const store = createStore(addFeatReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
