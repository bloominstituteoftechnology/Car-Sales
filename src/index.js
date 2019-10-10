import React from 'react';
import * as reducers from './state/reducers';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';

// Step 4 - store all our reducer in one big variable thanks to the combineReducers hook from the redux library!
const rootReducer = combineReducers({
    state: reducers.carReducer
});

// Step 5 - nourrish our management state (store) our reducers functions
const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // Step 6 - inject the store into our Provider, and make all our slices available to all components within our app  
    <Provider store={store}>
        <App />
    </Provider>, 
rootElement);
