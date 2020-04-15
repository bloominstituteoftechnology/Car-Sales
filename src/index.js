import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, rootElement);
