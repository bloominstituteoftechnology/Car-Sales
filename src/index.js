import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {additionalFeatureReducer} from "./Reducers/additionalFeatureReducer"

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(additionalFeatureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>, rootElement);
