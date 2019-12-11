import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

//style
import 'bulma/css/bulma.css';
import './styles.scss';

//reducer
import {carReducer} from "./reducers"

const store = createStore(
    carReducer,
    applyMiddleware(thunk, logger)
    );


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    rootElement);
