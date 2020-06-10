import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers";
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
