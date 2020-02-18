import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import 'bulma/css/bulma.css';
import './styles.scss';

//TODO: move this to reducers directory
function reducer() {
    return {
        name: "Redux store checking in"
    }
}


//! Redux store
//TODO: pass in "rootReducer"
const store = createStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
