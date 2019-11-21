import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { featuresReducer } from './Reducers/FeaturesReducers';

const applicationStore = createStore(featuresReducer);



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={applicationStore}><App /></Provider>, rootElement);
