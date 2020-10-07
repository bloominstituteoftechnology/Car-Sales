import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';
import { additionalFeatureReducer } from './reducers/additionalFeatureReducer';

const store = createStore(additionalFeatureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
, rootElement);
