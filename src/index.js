import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore( 
    allReducers, 
    window._REDUX_DEVTOOLS_EXTENSION_ && 
    window._REDUX_DEVTOOLS_EXTENSION_()
);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>,
 rootElement
 );
