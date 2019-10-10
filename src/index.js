import React from 'react';
import * as reducers from './state/reducers';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers } from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';

// Step 4 - store all our reducer in one big variable thanks to the combineReducers hook from the redux library!
const rootReducer = combineReducers({
    state: reducers.carReducer
});

const rootElement = document.getElementById('root');
ReactDOM.render(
<App />, 
rootElement);
